import { AppShell, Container, Grid, Header } from '@mantine/core';
import { InferGetStaticPropsType } from 'next';
import Cards from '../components/Cards';
import SearchBar from '../components/SearchBar';
import { apiGames } from '../services/apiGames';

export async function getStaticProps() {
  const {data: games} = await apiGames.get('/games')

  return {
      props: {
          games
      }
  }
}

export default function Index({games}: InferGetStaticPropsType<typeof getStaticProps>) {
  
  return (
    <AppShell
      padding="md"
      header={<Header height={60} p="xs"> <SearchBar /> </Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Container size='xs' px='xl' > <Cards games={games} /> </Container> 
    </AppShell>
  );
}