import React, { useCallback, useState } from 'react';
import FormProvider from '../../components/hook-form/FormProvider';
import { Link as RouterLink } from "react-router-dom"
import * as Yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Stack, accordionActionsClasses } from '@mui/material';
import { RHFTextField } from '../../components/hook-form';
const ProfileForm = () => {

    const ProfileSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        about: Yup.string().required("About is required"),
        avatarUrl: Yup.string().required("Avatar is required").nullable(true)
    });

    const defaultValues = {
        name: "",
        about: ""
    }

    const methods = useForm({
        resolver: yupResolver(ProfileSchema),
        defaultValues,
    });

    const { reset, watch, control, setError, setValue, handleSubmit, formState: { errors, isSubmitting, isSubmittingSuccessful } } = methods;

    const values = watch()

    const handleDrop = useCallback((acceptedFiles) => {
        const file = accordionActionsClasses[0];

        const newFile = Object.assign(file, {
            preview: URL.createObjectURL(file)
        })

        if(file){
            setValue("avatarUrl", newFile, {shouldValidate: true})
        }
    }, [setValue]);


    const onSubmit = async (data) => {
        try {
            //submit data to backend
            console.log("data", data);
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

                <RHFTextField name="name" label="Name" helperText={"This name is visible to your contacts"}/>
            <RHFTextField multiline rows={4} maxRows={5} name={"about"} label={"About"}/>
            </Stack>
        </FormProvider>
    );
};

export default ProfileForm;