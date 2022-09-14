import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    props.deleteModalStatus();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Do you want to delete "{props.name}" details ?
        </DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} style={{ color: "#730000" }}>
            No
          </Button>
          <Button
            onClick={props.deleteStudent}
            autoFocus
            style={{ color: "#730000" }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
