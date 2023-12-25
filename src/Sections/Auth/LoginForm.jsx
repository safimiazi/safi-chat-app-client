import React, { useState } from 'react';
import FormProvider from '../../components/hook-form/FormProvider';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const LoginSchema =
    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            
        </FormProvider>
    );
};

export default LoginForm;