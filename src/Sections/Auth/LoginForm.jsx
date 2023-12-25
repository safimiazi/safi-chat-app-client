import React, { useState } from 'react';
import FormProvider from '../../components/hook-form/FormProvider';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form'
import { YupResolver } from "@hookform/resolvers"
import { Stack } from '@mui/material';
const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email must be a valid email address"),
        password: Yup.string().required("password is required"),
    });

    const defaultValues = {
        email: "demo@safichat.com",
        password: "demo1234"
    }

    const methods = useForm({
        resolver: YupResolver(LoginForm),
        defaultValues,
    });

    const { reset, setError, handleSubmit, formState: { errors, isSubmitting, isSubmittingSuccessful } } = methods;

    const onSubmit = async (data) => {
        try {
            //submit data to backend
        }
        catch (error) {
            console.log(error);
            reset();
            setError("afterSubmit", {
                ...error,
                message: error.message,
            })
        }
    }
    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
<Stack spacing={3}>

</Stack>
        </FormProvider>
    );
};

export default LoginForm;