import { Button, createStyles  } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    height: 50,
    width: 90,

    '&:hover': {
      backgroundColor: theme.colors.violet[6],
      color: theme.colors.red[2],
    }
  }
}))

export default function Btn() {
  const {classes} = useStyles()

  return (
    <Button variant='light'color='green.5' radius='md' classNames={{root: classes.root}}>
      Settings
    </Button>
  );
}