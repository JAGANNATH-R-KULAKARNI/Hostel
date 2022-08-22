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
import BodyUI from "./Reg/main";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { supabase } from "../../Supabase";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://nie.ac.in/">
        NIE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(true);
  const m1 = useMediaQuery("(min-width:600px)");

  const [heading, setHeading] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleClose = () => {
    setOpen(false);
    props.registerHandler();
  };

  const handleSubmit = () => {
    alert("submitted");
  };
  async function announcementPush() {
    if (heading.length == 0 || description.length == 0) {
      alert("Please fill all fields");
      return;
    }
    const { data, error } = await supabase.from("announcements").insert([
      {
        heading: heading,
        description: description,
      },
    ]);

    if (data) {
      alert("Successfully announced");
      setHeading("");
      setDescription("");
    }

    if (error) {
      console.log(error);
      alert("some error has occured");
    }
  }



  async function announcementPush(){
        if(heading.length==0 || description.length==0){
         alert("Please fill all fields");
        return;
        }
        const { data, error } = await supabase.from("announcements").insert([
         { 
                  heading:heading,
                  description:description
                }, 
              ]); 
           
              if (data) { 
                alert("Successfully announced"); 
                
                setHeading("");
                setDescription("");
              } 
           
              if (error) { 
                console.log(error); 
                alert("some error has occured"); 
              } 
        }
  
  



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
            Announcement
          </h1>
          <div style={{ marginTop: m1 ? "-15px" : "-10px" }}>
            <Divider />
          </div>
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <React.Fragment>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="heading"
                      name="heading"
                      label="Heading"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      placeholder="Subject..."
                      value={heading}
                      onChange={(e) => {
                        setHeading(e.target.value);
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <TextField
                      id="description"
                      name="description"
                      label="Announcement"
                      fullWidth
                      multiline
                      rows={8}
                      placeholder="Announce"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
              </React.Fragment>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "10px",
                    minWidth: "200px",
                  }}
                  onClick={announcementPush}
                >
                  Submit
                </Button>
              </div>
            </Paper>
            <Copyright />
          </Container>
        </div>
      </Dialog>
    </div>
  );
}
