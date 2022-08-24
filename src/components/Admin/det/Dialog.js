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
          
          <TableUI
              name={props.name}
              mail={props.email}
              usn={props.usn}
              phno={props.phno}
              hf1={props.hf1}
              hf2={props.hf2}
              hf3={props.hf3}
              hf4={props.hf4}
              
              cd={props.cd}/>
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