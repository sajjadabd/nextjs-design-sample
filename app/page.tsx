"use client"

import Image from 'next/image'
import Button ,  { ButtonProps } from '@mui/material/Button';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

import IconButton from '@mui/material/IconButton';

import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { purple } from '@mui/material/colors';

import { styled } from '@mui/material/styles';

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  width : '20em',
  fontSize : '1em',
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
        <ColorButton variant="contained">Custom CSS</ColorButton>
      </div>

      


    </main>
  )
}
