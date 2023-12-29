import { yupResolver } from '@hookform/resolvers/yup';
import { Dialog, DialogContent, DialogTitle, Slide, Stack, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import FormProvider from '../../components/hook-form/FormProvider';

//Todo => create a reuseable component
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const CreateGroupForm = ({}) => {
    const NewGroupSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        members: Yup.array().min(2, "Must have al least 2 members")
    });

    const defaultValues = {
        title:"",
        members: [],
    }

    const methods = useForm({
        resolver: yupResolver(NewGroupSchema),
        defaultValues
    });

    const { reset, watch setError, handleSubmit, formState: { errors, isValid, isSubmitting, isSubmittingSuccessful } } = methods;

    const onSubmit = async (data) => {
        try {
            //API Call
            console.log("data", DataTransfer);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
<Stack>
    <Stack>
        <Typography></Typography>
    </Stack>
</Stack>
        </FormProvider>
    )
  }
const CreateGroup = ({open, handleClose}) => {
    return (
        <Dialog fullWidth maxWidth="xs" open={open} TransitionComponent={Transition} keepMounted sx={{p:4}}>
            {/* tltle */}
            <DialogTitle>Create New Group</DialogTitle>
            {/* content */}
            <DialogContent>
                {/* form */}
            </DialogContent>
        </Dialog>
    );
};

export default CreateGroup;