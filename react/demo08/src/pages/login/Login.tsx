import React from 'react'
import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { TextField, Button, Typography, Checkbox } from '@mui/material'

import './Login.css'


type FormData = {
    user: string,
    pass: string,
    check: boolean,
}

type FormProps = {
    name: string,
}

// export default function Login()
const Login: React.FC = (props) =>
{

    const form = useForm<FormData>({
        mode: 'onChange',
        reValidateMode: 'onChange',
        defaultValues: {
            user: "",
            pass: "",
            check: false,
        },
        resolver: undefined,
        context: undefined,
        criteriaMode: "firstError",
        shouldFocusError: true,
        shouldUnregister: false,
        shouldUseNativeValidation: false,
        delayError: undefined
    });

    const {register, control, handleSubmit, watch, formState, getValues, setValue, setFocus, setError} = form;


    return (
    <div className='login'>

      <div>
        <Typography variant="h5" component="div" gutterBottom>
            Login
        </Typography>

        <Controller
            control={control}
            name="check"
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
            }) => (
                <Checkbox
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                checked={value}
                inputRef={ref}
                />
            )}
        />

        <TextField sx={{m:2}} size="small" fullWidth={true}  id="outlined-basic" label="User:" variant="outlined" />
        <TextField sx={{m:2}}  size="small"  fullWidth={true} id="outlined-basic" label="Password:" variant="outlined" />

        <Button sx={{m:2}}  variant="contained">Login</Button>

      </div>


    </div>
    )
}


export default Login;
