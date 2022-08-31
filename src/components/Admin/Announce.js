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
import { send } from "emailjs-com";
import emailjs from "emailjs-com";
import axios from "axios";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import "./tick.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

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

  const [progress, setProgress] = React.useState(0);
  const [loadStatus, setLoadStatus] = React.useState(false);

  const [heading, setHeading] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [students, setStudents] = React.useState("");
  const [sendingTo, setSendingTo] = React.useState("");
  const [completed, setCompleted] = React.useState(0);

  const [currentEmail, setCurrentEmail] = React.useState(
    "jagannathrkulakarni.171845@gmail.com"
  );
  const form = React.useRef();

  const handleClose = () => {
    setOpen(false);
    props.registerHandler();
  };

  const handleSubmit = () => {
    alert("submitted");
  };
  let ConvertStringToHTML = function (str) {
    let parser = new DOMParser();
    let doc = parser.parseFromString(str, "text/html");
    return doc.body;
  };

  async function announcementPush(e) {
    e.preventDefault();

    if (heading.length == 0 || description.length == 0) {
      alert("Please fill all fields");
      return;
    }
    setLoadStatus(true);
    console.log("------------");
    console.log(form.current);

    setProgress(0);
    var flagg = 0;
    setCompleted(0);

    for (var i = 0; i < students.length; i++) {
      console.log(students[i]["email"]);
      setSendingTo(students[i]["email"]);

      var template_params_bro = ConvertStringToHTML(`<form id="get_this_bro">
    <input type="text" name="heading_maga_lo" value="${heading}"/>
     <input type="text" name="description_maga_lo" value="${description}"/>
         <input type="email" name="email_maga_lo" value="${students[i]["email"]}"/>
    </form>`);

      console.log(template_params_bro.children[0]);
      setProgress((i / students.length) * 100);

      emailjs
        .sendForm(
          "service_4asjame",
          "template_lk48ssq",
          template_params_bro.children[0],
          "-tFiTlSDJ_f3r2e-G"
        )
        .then((u) => {
          console.log("Success");

          console.log(u);
        })
        .catch((err) => {
          console.log("Error");

          console.log(err);
        });
    }

    const { data, error } = await supabase.from("announcements").insert([
      {
        heading: heading,
        description: description,
      },
    ]);

    if (data) {
      setHeading("");
      setDescription("");
    }

    if (error) {
      console.log(error);
      alert("some error has occured");
    }

    setInterval(() => {
      setProgress(100);
    }, 2000);
  }

  const fetchStudents = async () => {
    const studentsDetails = await supabase.from("students").select("*");

    if (studentsDetails.data) {
      // console.log(studentsDetails.data);
      setStudents(studentsDetails.data);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    var data_bro = {
      service_id: "service_4asjame",
      template_id: "template_lk48ssq",
      user_id: "-tFiTlSDJ_f3r2e-G",
      template_params: {
        heading_maga: heading,
        description_maga: description,
      },
    };

    await axios
      .post("https://api.emailjs.com/api/v1.0/email/send", {
        data: JSON.stringify(data_bro),
        contentType: "application/json",
      })
      .then((u) => {
        console.log("Success bro");
        console.log(u);
      })
      .catch((err) => {
        console.log("Error bro");
        console.log(err);
      });
  };

  React.useEffect(() => {
    setInterval(() => {
      fetchStudents();
    }, 1000);
  }, []);

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <NavBarUI handleClose={handleClose} />
        {loadStatus ? (
          <div>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              // onClick={() => setLoadStatus(!loadStatus)}
            >
              <Paper
                style={{
                  width: m1 ? "20%" : "80%",
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  paddingBottom: "5%",
                  maxHeight: "200px",
                }}
              >
                {progress < 100 ? (
                  <div>
                    <h3 style={{ width: "100%", textAlign: "center" }}>
                      Broadcasting...
                    </h3>
                    <h6
                      style={{
                        width: "100%",
                        textAlign: "center",
                        marginTop: "-10px",
                      }}
                    >
                      {" "}
                      Sending to ... {sendingTo}
                    </h6>

                    <Box sx={{ width: "100%" }}>
                      <LinearProgressWithLabel value={progress} />
                    </Box>
                  </div>
                ) : (
                  <div>
                    <svg
                      className="checkmark"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 52 52"
                      style={{ marginTop: m1 ? "40px" : "20px" }}
                    >
                      <circle
                        className="checkmark__circle"
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                      />
                      <path
                        className="checkmark__check"
                        fill="none"
                        d="M14.1 27.2l7.1 7.2 16.7-16.8"
                      />
                    </svg>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{
                        textAlign: "center",
                        marginTop: m1 ? "0px" : "0px",
                      }}
                    >
                      Successfully Sent
                    </Typography>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "black",
                          marginTop: m1 ? "20px" : "10px",
                        }}
                        onClick={() => {
                          setProgress(0);
                          setLoadStatus(false);
                        }}
                      >
                        Okay
                      </Button>
                    </div>
                  </div>
                )}
              </Paper>
            </Backdrop>
          </div>
        ) : null}
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
          {/* <div>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="name_maga" />
              <br />
              <label>Email</label>
              <input type="email" name="email_maga" />
              <br />
              <label>Message</label>
              <textarea name="message_maga" />
              <br />
              <input type="submit" value="Send bro" />
            </form>
          </div> */}
          <div style={{ marginTop: m1 ? "-15px" : "-10px" }}>
            <Divider />
          </div>
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <form ref={form} onSubmit={announcementPush}>
                <React.Fragment>
                  <Grid container spacing={3}>
                    <input
                      type="email"
                      hidden
                      name="email_maga"
                      value={currentEmail}
                    />
                    <Grid item xs={12} sm={12}>
                      <TextField
                        id="heading"
                        name="heading_maga"
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
                        name="description_maga"
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
                    // onClick={announcementPush}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Paper>
            <Copyright />
          </Container>
        </div>
      </Dialog>
    </div>
  );
}
