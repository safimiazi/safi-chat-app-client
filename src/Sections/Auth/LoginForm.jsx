import React, { useState } from 'react';
import FormProvider from '../../components/hook-form/FormProvider';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Stack } from '@mui/material';
import { RHFTextField } from '../../components/hook-form';
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
        resolver: yupResolver(LoginForm),
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
{!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}
</Stack>

<RHFTextField name="email" label="Email address"/>
        </FormProvider>
    );
};

export default LoginForm;