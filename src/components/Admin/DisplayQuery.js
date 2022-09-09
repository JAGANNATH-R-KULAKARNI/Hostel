import React, { useEffect, useState } from "react";
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

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(true);
  const m1 = useMediaQuery("(min-width:600px)");

  const [heading, setHeading] = React.useState("");
  const [description, setDescription] = React.useState("");

  const [dquery, setDquery] = useState([]);
  const handleClose = () => {
    setOpen(false);
    props.registerHandler();
  };

  const handleSubmit = () => {
    alert("submitted");
  };

  const queryFetch = async () => {
    const { data, error } = await supabase
      .from("query")
      .select("*,rooms(*),students(*)");

    if (data) {
      console.log("Query data");
      console.log(data);
      setDquery(data);
    }

    if (error) {
      console.log("Error");
      console.log(error.message);
    }
  };
  useEffect(() => {
    queryFetch();
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

        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: m1 ? "50px" : "30px",
              marginTop: m1 ? "10px" : "10px",
            }}
          >
            {" "}
            Queries of Students
          </h1>
          <div style={{ marginTop: m1 ? "-15px" : "-10px" }}>
            <Divider />
          </div>
          <Container
            component="main"
            maxWidth="sm"
            sx={{ mb: 4, display: "flex", justifyContent: "center" }}
          >
            <center>
              <table id="customers">
                <tr>
                  <th>USN</th>
                  <th>Name</th>
                  <th>Building</th>
                  <th>Block</th>
                  <th>Floor</th>
                  <th>Room</th>
                  <th>Reason</th>
                  <th>Brief</th>
                </tr>
                {dquery.map((query, id) => {
                  return (
                    <tr key={id}>
                      <th>{query["students"]["usn"]}</th>
                      <td>{query.students.name}</td>
                      <td>{query.rooms.hostel_name}</td>
                      <td>{query.rooms.block}</td>
                      <td>
                        {query.rooms.floor == 0 ? "Ground" : query.rooms.floor}
                      </td>
                      <td>{query.rooms.room}</td>
                      <td>{query.reason}</td>
                      <td>{query.brief}</td>
                    </tr>
                  );
                })}
                ;
              </table>
            </center>
          </Container>
        </div>
      </Dialog>
    </div>
  );
}
