import React, { useState } from 'react';
import FormProvider from '../../components/hook-form/FormProvider';
import { Link as RouterLink } from "react-router-dom"
import * as Yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, IconButton, InputAdornment, Link, Stack } from '@mui/material';
import { RHFTextField } from '../../components/hook-form';
import { Eye, EyeSlash } from 'phosphor-react';
const ProfileForm = () => {

    const LoginSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email must be a valid email address"),
        password: Yup.string().required("password is required"),
    });

    const defaultValues = {
        email: "demo@safichat.com",
        password: "demo1234"
    }

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
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

                <RHFTextField name="email" label="Email address" />
            </Stack>
        </FormProvider>
    );
};

export default ProfileForm;