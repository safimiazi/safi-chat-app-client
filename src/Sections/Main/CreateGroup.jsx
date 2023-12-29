import { Dialog, Slide } from '@mui/material';
import React from 'react';


//Todo => create a reuseable component
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const CreateGroup = ({open, handleClose}) => {
    return (
        <Dialog fullWidth maxWidth="xs" open={open} TransitionComponent={Transition} keepMounted sx={{p:4}}>
            {/* tltle */}
            {/* content */}
        </Dialog>
    );
};

export default CreateGroup;