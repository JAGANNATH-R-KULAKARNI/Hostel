import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "./Typo";
import TextField from "./TextField";
import Snackbar from "./Snackbar";
import Button from "./Button";
import niehostel from "../images/Boys_hostel.jpg";
import { supabase } from "../../Supabase";
import { setRef } from "@mui/material";

function Queries(props) {
  const [open, setOpen] = React.useState(false);
  const [problem, setProblem] = React.useState("");
  const [brief, setBrief] = React.useState("");
  const [message, setMessage] = React.useState("Your Query has been sent 😊");
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setOpen(true);
  // };

  const sendQuery = async () => {
    if (problem.length == 0 || brief.length == 0) {
      setMessage("All the field should be filled");
      setOpen(true);
      return;
    }
    console.log("user data");
    console.log(props.user);
    setMessage("Your Query has been sent 😊");
    const { data, error } = await supabase.from("query").insert([
      {
        student_id: props.user["s_id"],
        room_id: props.user["room_id"],
        reason: problem,
        brief: brief,
      },
    ]);

    if (data) {
      setOpen(true);
      console.log(data);
      setBrief("");
      setProblem("");
    }

    if (error) {
      setMessage(error.message);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      component="section"
      sx={{ mt: 10, display: "flex", paddingLeft: "5%", paddingRight: "5%" }}
    >
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "warning.main",
              py: 8,
              px: 3,
              backgroundColor: "#D5A418",
              borderRadius: "50px",
            }}
          >
            <Box
              component="form"
              // onSubmit={handleSubmit}
              sx={{ maxWidth: 400 }}
            >
              <Typography variant="h2" component="h2" gutterBottom>
                Any Queries ?
              </Typography>
              <Typography variant="h5">Contact Us !</Typography>
              <TextField
                noBorder
                placeholder="Reason"
                variant="standard"
                multiline
                maxRows={4}
                sx={{ width: "100%", mt: 3, mb: 2 }}
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
              />
              <TextField
                id="filled-multiline-static"
                // label="Write Your Query"
                multiline
                placeholder="Explain your query in brief..."
                rows={4}
                variant="filled"
                sx={{
                  width: "100%",
                  mt: 3,
                  mb: 2,
                  "& legend": { display: "none" },
                  "& fieldset": { top: 0 },
                }}
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
              />
              <Button
                color="primary"
                variant="contained"
                sx={{ width: "100%", backgroundColor: "black" }}
                onClick={sendQuery}
              >
                Send The Query
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: "100%",
              background:
                "url(/static/themes/onepirate/productCTAImageDots.png)",
            }}
          />
          <Box
            component="img"
            src={niehostel}
            alt="call to action"
            sx={{
              position: "absolute",
              top: -28,
              left: -500,
              right: 0,
              bottom: 0,
              width: "100%",
              minWidth: 1100,
              height: "auto",
              borderRadius: "20px",
            }}
          />
        </Grid>
      </Grid>
      <Snackbar open={open} closeFunc={handleClose} message={message} />
    </Container>
  );
}

export default Queries;
