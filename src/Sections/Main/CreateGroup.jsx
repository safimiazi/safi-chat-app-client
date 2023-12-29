import { Dialog, DialogContent, DialogTitle, Slide } from '@mui/material';
import React from 'react';
import * as Yup from 'yup';

//Todo => create a reuseable component
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const CreateGroupForm = ({}) => {
    const NewGroupSchema = Yup.object().shape({
        
    })
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