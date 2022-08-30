import { Badge, Card, Center, Divider, Group, Text } from '@mantine/core'
import Image from 'next/image'
import React from 'react'
import { gameData } from '../types/types'
import Info from './Info'

interface CardsInterface {
  games: gameData[]
}

function Cards({ games }: CardsInterface){
  
  return (
    <>
      {games.map(game => (
        <Card key={game.id} withBorder radius='md'p='lg' sx={{margin: 15}} >
          <Center>
            <Card.Section>
              <Image src={`${game.thumbnail}`}  width='500' height='140' alt="game thumbnail"/>
            </Card.Section>
          </Center>

          <Group position='apart' mt='md'mb='xs' > 
            <Text size='lg' align='center' weight={500} > {game.title} </Text>
            <Badge> {game.genre} </Badge>
          </Group>

          <Divider my="xl" />

          <Info  text={'Developer'} info={game.developer}  />
          <Info  text={'Publisher'} info={game.publisher}  />

          <Divider my="xl" />

          <Group position='apart'>
            <Text color='dimmed' weight={700}>
              Relase date:
            </Text>
            <Badge color="red" variant="dot">{game.release_date}</Badge>
          </Group>

          <Divider my="xl" />
          
          <Text size='md' > {game.short_description} </Text>
        </Card>))} 
    </>
  )
}

export default Cards