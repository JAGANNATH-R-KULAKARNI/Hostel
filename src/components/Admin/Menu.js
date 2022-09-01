import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import NavBarUI from "../NavBar2";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuUI from "../Menu";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(true);
  const m1 = useMediaQuery("(min-width:600px)");



  const [name, setName] = React.useState("");
  const [usn, setUSN] = React.useState("");
  const [yoj, setYoj] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phnum, setPhnum] = React.useState("");
  const [block, setBlock] = React.useState("");
  const [floor, setFloor] = React.useState("");
  const [room, setRoom] = React.useState("");
  const [hf1, setHF1] = React.useState("");
  const [hf2, setHF2] = React.useState("");
  const [hf3, setHF3] = React.useState("");
  const [hf4, setHF4] = React.useState("");
  const [cd, setCD] = React.useState("");



  const handleClose = () => {
    setOpen(false);
    props.registerHandler();
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <NavBarUI handleClose={handleClose} />

        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: m1 ? "50px" : "30px",
              marginTop: m1 ? "10px" : "10px",
            }}
          >
            {" "}
            Menu
          </h1>
          <div style={{ marginTop: m1 ? "-15px" : "-10px" }}>
            <Divider />
          </div>
          <MenuUI />
        </div>
      </Dialog>
    </div>
  );
}
