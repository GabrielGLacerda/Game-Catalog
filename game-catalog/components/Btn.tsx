import { Button, createStyles } from '@mantine/core';
import { BsSearch } from "react-icons/bs";

const useStyles = createStyles((theme) => ({
  root: {
    height: 40,
    width: 90,
    margin: 5,

    '&:hover': {
      backgroundColor: theme.colors.gray[6],
      color: theme.colors.gray[9],
    }
  }
}))

export default function Btn() {
  const {classes} = useStyles()

  return (
    <Button variant='outline'color='gray.1' radius='md' classNames={{root: classes.root}}>
      <BsSearch />
    </Button>
  );
}