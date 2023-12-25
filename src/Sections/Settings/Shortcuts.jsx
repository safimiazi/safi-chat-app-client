import { Dialog, DialogContent, DialogTitle, Grid, Slide } from '@mui/material';
import React from 'react';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const Shortcuts = ({ open, handleClose }) => {



    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                fullWidth maxWidth="md" sx={{p:4}}
            >
                <DialogTitle>Keyboard Shortcuts</DialogTitle>
                <DialogContent sx={{mt:4}}>
<Grid container spacing={3}>

</Grid>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Shortcuts;