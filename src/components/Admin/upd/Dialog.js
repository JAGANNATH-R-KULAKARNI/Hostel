import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import TableUI from "./table";
import Avatar from '@mui/material/Avatar';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(true);
  const [value1, setValue1] = React.useState(props.email);
  const [value2, setValue2] = React.useState(props.phno);
  const [value3, setValue3] = React.useState(props.yoj);
  const [value4, setValue4] = React.useState(props.hf1);
  const [value5, setValue5] = React.useState(props.hf2);
  const [value6, setValue6] = React.useState(props.hf3);
  const [value7, setValue7] = React.useState(props.hf4);
  const [value8, setValue8] = React.useState(props.cd);
  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };
  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };
  const handleChange5 = (event) => {
    setValue5(event.target.value);
  };
  const handleChange6 = (event) => {
    setValue6(event.target.value);
  };
  const handleChange7 = (event) => {
    setValue7(event.target.value);
  };
  const handleChange8 = (event) => {
    setValue8(event.target.value);
  };

  const handleClose = () => {
    
    setOpen(false);
    props.toggleModel();
  };

  return (
    <div>
     
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}
                  >
                   
          
            
                <div
                   style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}  >
                    {/* <Avatar sx={{ bgcolor: "#20B2AA" }} aria-label="recipe" src="/broken-image.jpg"
                    style={{
                      width:"10%",
                      display: "flex",
                      marginLeft:"20px",
                    }}
               />
               <br/> */}
                {props.name}
                <br/>
                {props.usn}
                </div>
                </BootstrapDialogTitle>
        <DialogContent dividers>
           
          {/* <TableUI
              name={props.name}
              mail={props.email}
              usn={props.usn}
              phno={props.phno}
              hf1={props.hf1}
              hf2={props.hf2}
              hf3={props.hf3}
              hf4={props.hf4}
              
              cd={props.cd}/> */}
                  <React.Fragment>
                <Grid container spacing={3}>
                  

                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="description"
                      name="description"
                      label="Email"
                      fullWidth
                      
                      value={value1}
                      onChange={handleChange1}
                      placeholder="email"
                      //value={description}
                      // onChange={(e) => {
                      //   setDescription(e.target.value);
                      // }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="description"
                      name="description"
                      label="Phone number"
                      fullWidth
                      
                      value={value2}
                      onChange={handleChange2}
                      placeholder="Phone number"
                      //value={description}
                      // onChange={(e) => {
                      //   setDescription(e.target.value);
                      // }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="description"
                      name="description"
                      label="Year joined"
                      fullWidth
                      
                      value={value3}
                      onChange={handleChange3}
                      placeholder="Year joined"
                     
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="description"
                      name="description"
                      label="Hostel fees 1st year"
                      fullWidth
                      
                      value={value4}
                      onChange={handleChange4}
                      placeholder="Hostel fees 1st year"
                     
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="description"
                      name="description"
                      label="Hostel fees 2nd year"
                      fullWidth
                      
                      value={value5}
                      onChange={handleChange5}
                      placeholder="Hostel fees 2nd year"
                     
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="description"
                      name="description"
                      label="Hostel fees 3rd year"
                      fullWidth
                      
                      value={value6}
                      onChange={handleChange6}
                      placeholder="Hostel fees 3rd year"
                     
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="description"
                      name="description"
                      label="Hostel fees 4th year"
                      fullWidth
                      
                      value={value7}
                      onChange={handleChange7}
                      placeholder="Hostel fees 4th year"
                     
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="description"
                      name="description"
                      label="Constant deposit"
                      fullWidth
                      
                      value={value8}
                      onChange={handleChange8}
                      placeholder="Constant deposit"
                     
                    />
                  </Grid>
                </Grid>
              </React.Fragment> 
        </DialogContent>
        <DialogActions>
          <Button style={{backgroundColor:"#730000",color:"white",fontSize:"14px"}} autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}