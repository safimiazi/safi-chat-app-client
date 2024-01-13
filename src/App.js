// routes
import Router from "./routes";
// theme
import ThemeProvider from './theme';
// components
import ThemeSettings from './components/settings';
import { Snackbar } from "@mui/material";
import React from "react";
import MuiAlert from '@mui/material/Alert';

const vertical = "bottom";
const horizontal = "center";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {

  return (
   <>
    <ThemeProvider>
      <ThemeSettings>
        {" "}
        <Router />{" "}
      </ThemeSettings>
    </ThemeProvider>

<Snackbar 
anchorOrigin={{vertical, horizontal}}
open={open}
autoHideDuration={4000}
key={vertical + horizontal}
onClose={()=> {}}
>
<Alert onClose={()=> {}} severity={severity} sx={{width:"100%"}}>
  {message}
</Alert>
</Snackbar>
   
   </>
  );
}

export default App;
