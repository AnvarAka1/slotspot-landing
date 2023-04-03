import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'
import { Box, Chip, createStyles, Menu, TextInput } from '@mantine/core'
import axios from '@src/api/instance'

const useStyles = createStyles(() => ({
  root: {
    minHeight: '36px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'wrap',
    padding: '6px'
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
  }
}))

type Props = {
  name: string
  api: string
}

type OptionType = { id: number, title: string }

function AutocompleteField({ name, api }: Props) {
  const { classes } = useStyles()

  const inputRef = useRef<HTMLInputElement>(null)

  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')
  const [values, setValues] = useState<OptionType[]>([])
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
    setValues(prevValues => prevValues.filter(value => value.id !== valueToRemove.id))
  }

  const changeValues = (clickedValue: OptionType) => {
    const exists = values.find((value) => value.id === clickedValue.id)

    if (!exists) {
      setValues(prevValues => [...prevValues, clickedValue])
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

      if (inputRef.current) {
        inputRef.current.focus()
      }

    }
  }

  const handleOptionClick = (value: OptionType) => {
    changeValues(value)
    setOpened(false)

    if (inputRef.current) {
      inputRef.current.focus()
    }

  }

  const handleValueRemove = (value: OptionType) => {
    removeValue(value)
  }

  return (
    <Menu opened={opened}>
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
            value={value}
            onChange={handleChange}
            onClick={() => setOpened(true)}
            onKeyDown={handleInputKeyDown}
          />
        </Menu.Target>
        <Menu.Dropdown sx={{
          left: '0 !important',
          width: '100% !important'
        }}>
          {options.length
            ? options.map((value) => (
              <Menu.Item
                key={value.id}
                onClick={() => handleOptionClick(value)}
                onKeyPress={(event) => handleOptionSelect(event, value)}
                color="default"
              >
                {value.title}
              </Menu.Item>
            ))
            : 'No options found.'}
        </Menu.Dropdown>
      </Box>
    </Menu>
  )
}

export default AutocompleteField
