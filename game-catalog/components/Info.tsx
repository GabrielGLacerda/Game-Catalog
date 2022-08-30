import { Text } from '@mantine/core'
import React from 'react'

interface props {
    info: string,
    text: string,
}

function Info({info, text}: props) {
  return (
    <Text 
    variant="gradient" 
    gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
    weight={700} 
    >
        {text}: {info}
    </Text>

  )
}

export default Info