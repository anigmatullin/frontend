import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
    name: string,
}

export default function SimpleForm()
{
    const form  = useForm<FormData>({mode: "onChange"});

    return (
        <div>SimpleForm</div>
    )
}
