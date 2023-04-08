import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { Box, Chip, clsx, createStyles, Menu, TextInput } from '@mantine/core'
import axios from '@src/api/instance'

const useStyles = createStyles((theme) => ({
  root: {
    minHeight: '36px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'wrap',
    padding: '0 6px',
    boxSizing: 'border-box'
  },
  label: {
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: 500,
    color: '#212529',
    wordBreak: 'break-word',
    cursor: 'default'
  },
  chipList: {
    display: 'flex'
  },
  textInput: {
    width: 0,
    minWidth: '30px',
    flexGrow: 1
  },
  input: {
    width: '100%',
    padding: '0 2px',
    border: 'none',
    outline: 'none',
    '&:active, &:focus, &:hover': {
      border: 'none',
      outline: 'none'
    }
  },
  activeMenuItem: {
    backgroundColor: '#cecbcb',
  }
}))

type Props = {
  label: string
  placeholder: string
  api: string
  onValuesChange: (values: OptionType[]) => void
  values: OptionType[]
}

type OptionType = { id: number, title: string }

function AutocompleteField({ label, placeholder, api, values, onValuesChange }: Props) {
  const { classes } = useStyles()

  const inputRef = useRef<HTMLInputElement>(null)

  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<OptionType[]>([])
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(api, { params: { q: value } })
      .then((response) => {
        const data = response.data
        const results = data.data.results || []

        setOptions(results)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [value])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    setOpened(true)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !value.length && values.length > 0) {
      removeValue(values[values.length - 1])
    }

    if (event.key === 'ArrowDown') {
      setOpened(true)
    }
  }

  const removeValue = (valueToRemove: OptionType) => {
    onValuesChange(values.filter(value => value.id !== valueToRemove.id))
  }

  const changeValues = (clickedValue: OptionType) => {
    const exists = values.find((value) => value.id === clickedValue.id)

    if (!exists) {
      onValuesChange([...values, clickedValue])
      setValue('')
    }

    if (exists) {
      removeValue(clickedValue)
    }
  }

  const handleOptionSelect = (event: KeyboardEvent<HTMLButtonElement>, value: OptionType) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      changeValues(value)
      setOpened(false)
      setValue('')
      if (inputRef.current) {
        inputRef.current.focus()
      }

    }
  }

  const handleOptionClick = (value: OptionType) => {
    changeValues(value)
    setOpened(false)
    setValue('')

    if (inputRef.current) {
      inputRef.current.focus()
    }

  }

  const handleValueRemove = (value: OptionType) => {
    removeValue(value)
  }

  return (
    <Menu opened={opened} closeOnClickOutside={true} returnFocus={true}>
      <Box>
        <label className={classes.label}>{label}</label>
        <Box className={classes.root}>
          {values.map(value => (
            <Chip key={value.id} checked={false} sx={{ marginRight: '2px' }}>
              {value.title} <span onClick={() => handleValueRemove(value)}>x</span>
            </Chip>
          ))}
          <Menu.Target>
            <TextInput
              ref={inputRef}
              classNames={{
                root: classes.textInput,
                input: classes.input
              }}
              placeholder={values.length ? '' : placeholder}
              value={value}
              onChange={handleChange}
              onClick={() => setOpened(true)}
              onKeyDown={handleInputKeyDown}
            />
          </Menu.Target>
          <Menu.Dropdown
            sx={{
              left: '0 !important',
              width: '100% !important'
            }}
          >
            {options.length
              ? options.map((value) => (
                <Menu.Item
                  key={value.id}
                  onClick={() => handleOptionClick(value)}
                  onKeyPress={(event) => handleOptionSelect(event, value)}
                  color="default"
                  className={clsx({
                    [classes.activeMenuItem]: values.find(val => val.id === value.id)
                  })}
                >
                  {value.title}
                </Menu.Item>
              ))
              : 'No options found.'}
          </Menu.Dropdown>
        </Box>
      </Box>
    </Menu>
  )
}

export default React.memo(AutocompleteField)
