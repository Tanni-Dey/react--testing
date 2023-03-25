import { Button, Grid, OutlinedInput, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import React from 'react';
import { SubmitHandler } from 'react-hook-form';
// import { useForm } from 'react-hook-form/dist/useForm';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';


interface IFormInputs {
    name: string;
    age: number;
    email: string;
}

const onSubmit: SubmitHandler<IFormInputs> = data => console.log(data);


const schema = yup.object({
    name: yup.string().required("Name is required"),
    age: yup.number().positive().integer().required("Ag is required"),
}).required();
const Form = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<IFormInputs>();
    return (
        <Grid>
            <h2>Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField label="name" {...register("name", { required: true })} />
                {errors.name ? <Alert role='alert' variant="standard">Name is required</Alert> : ''}
                <TextField label="age" {...register("age", { required: true })} />
                {errors.age ? <Alert role='alert' variant="standard">Age is required</Alert> : ''}
                <Button type="submit">submit</Button>
            </form>
            {/* <Alert variant="standard">This is an Alert using the solid variant.</Alert> */}
        </Grid>
    );
};

export default Form;
