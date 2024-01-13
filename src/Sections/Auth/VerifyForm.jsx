import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from "yup"
import FormProvider from '../../components/hook-form/FormProvider';
import { Button, Stack } from '@mui/material';
import RHFCodes from '../../components/hook-form/RHFCodes';
const VerifyForm = () => {
    //email => get it from store

    const VerifyCodeSchema = Yup.object().shape({
        code1: Yup.string().required("Code is required"),
        code2: Yup.string().required("Code is required"),
        code3: Yup.string().required("Code is required"),
        code4: Yup.string().required("Code is required"),
        code5: Yup.string().required("Code is required"),
        code6: Yup.string().required("Code is required"),
    });

    const defaultValues = {
        code1: "",
        code2: "",
        code3: "",
        code4: "",
        code5: "",
        code6: "",
    };

    const methods = useForm({
        mode: "onChange",
        resolver: yupResolver(VerifyCodeSchema),
        defaultValues,
    });

    const { handleSubmit, formState } = methods;

    const onSubmit = async (data) => {
        try {
            // Send API request
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={3}>
                    {/* custom otp input */}
                    <RHFCodes keyName={"code"} inputs={["code1", "code2", "code3", "code4", "code5", "code6"]}/>
                    <Button
                        fullWidth
                        color="inherit"
                        size='large'
                        type='submit'
                        variant='contained'
                        sx={{
                            bgcolor: "text.primary",
                            color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey.800",
                            '&:hover': {
                                bgcolor: "text.primary",
                                color: (theme) => theme.palette.mode === "light" ? "common.white" : "grey.800",
                            },
                        }}
                    >
                        Verify
                    </Button>

                </Stack>
            </FormProvider>

        </>
    );
};

export default VerifyForm;