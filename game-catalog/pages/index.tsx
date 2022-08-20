import { AppShell, Header } from '@mantine/core';
import Btn from '../components/Btn';

export default function Index() {
  return (
    <AppShell
      padding="md"
      header={<Header height={60} p="xs">Ola next</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Btn />
    </AppShell>
  );
}