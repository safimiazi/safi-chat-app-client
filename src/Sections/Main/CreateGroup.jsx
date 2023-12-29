import React from 'react';
import { Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { RHFTextField } from '../../components/hook-form';
import FormProvider from '../../components/hook-form/FormProvider';
import RHFAutoComplete from '../../components/hook-form/RHFAutoComplete';


const MEMBERS = ['Name 1', 'Name 2', 'Name 3'];

// Todo => create a reusable component
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = () => {
  const NewGroupSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    members: Yup.array().min(2, 'Must have at least 2 members'),
  });

  const defaultValues = {
    title: '',
    members: [],
  };

  const methods = useForm({
    resolver: yupResolver(NewGroupSchema),
    defaultValues,
  });

  const { handleSubmit, formState } = methods;
  const { errors, isValid, isSubmitting, isSubmittingSuccessful } = formState;

  const onSubmit = async (data) => {
    try {
      // API Call
      console.log('data', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="title" label="Title" />
        <RHFAutoComplete  name="members"
          label="Members"
          multiple
          freeSolo
          options={MEMBERS.map((option) => option)}
          ChipProps={{ size: 'medium' }}/>
      </Stack>
    </FormProvider>
  );
};

const CreateGroup = ({ open, handleClose }) => {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} TransitionComponent={Transition} keepMounted sx={{ p: 4 }}>
      {/* title */}
      <DialogTitle>Create New Group</DialogTitle>
      {/* content */}
      <DialogContent>
        {/* form */}
        <CreateGroupForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
