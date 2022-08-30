import { Center, TextInput } from '@mantine/core'
import React, { useState } from 'react'
import Btn from './Btn'

function SearchBar() {

  return (
    <Center >
        <TextInput placeholder='Search games' type="text" />
        <Btn />
    </Center>
  )
}

export default SearchBar