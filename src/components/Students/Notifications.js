import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../images/Logo.png";
import { supabase } from "../../Supabase";
import Button from "@mui/material/Button";

export default function NotificationsCompoenent(props) {
  const updateNoti = async () => {
    console.log("broooooooooooooooooooo");
    console.log(props.user);
    console.log(props.data);
    const notiUpdated = await supabase
      .from("cache")
      .update({ notification_status: props.data.length })
      .match({ email: props.user["email"] });

    if (notiUpdated.data) {
      console.log("Successfully updated notifications");
    }

    if (notiUpdated.error) {
      console.log(notiUpdated.error.message);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <h3 style={{ textAlign: "center", fontWeight: 500 }}>Notifications</h3>
      {props.data && props.data.length > 0 ? (
        <Paper square sx={{ pb: "50px", marginTop: "-10px" }}>
          <List sx={{ mb: 2 }}>
            {props.data &&
              props.data.map((item) => (
                <React.Fragment key={item["created_at"]}>
                  <ListSubheader sx={{ bgcolor: "background.paper" }}>
                    {item["created_at"].substr(0, 10)}
                  </ListSubheader>

                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={logo} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item["heading"]}
                      secondary={item["description"]}
                    />
                  </ListItem>
                </React.Fragment>
              ))}
          </List>
        </Paper>
      ) : null}
      {props.data && props.data.length == 0 ? (
        <h2 style={{ textAlign: "center" }}>No Notifications</h2>
      ) : null}
    </React.Fragment>
  );
}
