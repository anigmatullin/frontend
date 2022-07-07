import React from 'react';
import './App.css';

import Button from '@mui/material/Button';
import { TextField, Badge, Typography } from '@mui/material';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import { AccessAlarm } from '@mui/icons-material';
import ComboBox from './elements/ComboBox';

import Login from './pages/login/Login';
import SimpleForm from './pages/simple/SimpleForm';

function App()
{
  return (
    <div className="App">
      <header className="App-header">

        <Login />
        

        {/* <ComboBox  />

        <Badge badgeContent={4} color="primary">
            <AccessAlarm color="action" />
        </Badge> */}

      </header>
    </div>
  );
}

export default App;
