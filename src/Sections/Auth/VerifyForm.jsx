import React from 'react';
import * as Yup from "yup"
const VerifyForm = () => {
    //email => get it from store

    const VerifyCodeSchema = Yup.object().shape({
        code1: Yup.string().required("Code is required"),
        code2: Yup.string().required("Code is required"),
        code3: Yup.string().required("Code is required"),
        code4: Yup.string().required("Code is required"),
        code5: Yup.string().required("Code is required"),
        code6: Yup.string().required("Code is required"),
    })
    return (
        <div>
            
        </div>
    );
};

export default VerifyForm;