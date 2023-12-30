import { Button, Dialog, DialogContent, DialogTitle, Slide, Stack } from '@mui/material'; import React from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { MagnifyingGlass } from 'phosphor-react';
import { CallElement } from '../../components/CallElements';
import { MembersList } from '../../data';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const StartCall = ({ open, handleClose }) => {
    return (
        <Dialog onClose={handleClose} fullWidth maxWidth="xs" open={open} TransitionComponent={Transition} keepMounted sx={{ p: 4 }}>
            {/* title */}
            <DialogTitle sx={{ mb: 3 }}>Start Call</DialogTitle>
            {/* content */}
            <DialogContent>
            <Stack sx={{ width: "100%" }}>
                <Search>
                    <SearchIconWrapper>
                        <MagnifyingGlass color='#709CE6'></MagnifyingGlass>
                    </SearchIconWrapper>
                    <StyledInputBase placeholder="Search..." inputProps={{ "aria-label": "search" }}></StyledInputBase>
                </Search>
                </Stack>
                {/* call list */}
                {MembersList.map((el)=> <CallElement {...el}/>)}
                
            </DialogContent>
        </Dialog>

    );
};

export default StartCall;