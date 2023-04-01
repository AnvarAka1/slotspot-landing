import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'
import { Box, Chip, createStyles, Menu, TextInput } from '@mantine/core'


const useStyles = createStyles(() => ({
  root: {
    minHeight: '36px',
    paddingLeft: '12px',
    paddingRight: '12px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center'
  },
  chipList: {
    display: 'flex'
  },
  textInput: {},
  input: {
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

type OptionType = { id: number, name: string }

function AutocompleteField({ name, api }: Props) {
  const { classes } = useStyles()

  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState('')
  const [values, setValues] = useState<OptionType[]>([])
  const [opened, setOpened] = useState(false)
  const [options, setOptions] = useState([{ id: 1, name: 'hello' }, { id: 2, name: 'hi' }])


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !value.length && values.length > 0) {
      removeValue(values[values.length - 1])
    }

    if(event.key === 'ArrowDown') {
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
      <Box ref={ref} className={classes.root}>
        <Box className={classes.chipList}>
          {values.map(value => (
            <Chip key={value.id} checked={false}>
              {value.name} <span onClick={() => handleValueRemove(value)}>x</span>
            </Chip>
          ))}
        </Box>
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
          left: `${ref.current ? ref.current.offsetLeft + 'px' : '0'} !important`,
          width: `${ref.current ? ref.current.clientWidth + 'px' : '100%'} !important`
        }}>
          {options.length
            ? options.map((value) => (
              <Menu.Item
                key={value.id}
                onClick={() => handleOptionClick(value)}
                onKeyPress={(event) => handleOptionSelect(event, value)}
                color="default"
              >
                {value.name}
              </Menu.Item>
            ))
            : 'No options found.'}
        </Menu.Dropdown>
      </Box>
    </Menu>
  )
}

export default AutocompleteField
