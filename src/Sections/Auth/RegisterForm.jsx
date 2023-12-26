import React, { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form'
import FormProvider from '../../components/hook-form/FormProvider';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Stack } from '@mui/material';
import { RHFTextField } from '../../components/hook-form';

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const RegisterSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().required("Email is required").email("Email must be a valid email address"),
        password: Yup.string().required("password is required"),
    });

    const defaultValues = {
        firstName: "",
        lastName: "",
        email: "demo@safichat.com",
        password: "demo1234"
    }

    const methods = useForm({
        resolver: yupResolver(RegisterSchema),
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
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <RHFTextField name={"firstName"} label="First Name" />
                    <RHFTextField name={"lastName"} label="Last Name" />
                </Stack>

            </Stack>
        </FormProvider>

    );
};

export default RegisterForm;