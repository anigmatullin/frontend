import React from 'react';

import store from '../../store/store';
import {IRootState} from '../../store/store';

import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Step3()
{
  const finnish = `https://www.youtube.com/watch?v=KzCeNjRd2Bk`;

  // function handleInc()
  // {
  //   store.dispatch(increment(null));
  // }

  // function handleDec()
  // {
  //   store.dispatch(decrement(null));
  // }

  return (
    <div>


    <Stack spacing={2} direction="row">
      <Button variant="contained" component={Link} to="/wizard/step1">Start Over</Button>
      <Button variant="contained" target="_blank" href={finnish}>Finnish</Button>
      {/* <Button variant="contained">Finish</Button> */}
    </Stack>
    </div>
  )
}
