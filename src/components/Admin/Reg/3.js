import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Fees(props) {
  const [hf1, setHF1] = React.useState("");
  const [hf2, setHF2] = React.useState("");
  const [hf3, setHF3] = React.useState("");
  const [hf4, setHF4] = React.useState("");
  const [cd, setCD] = React.useState("");

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            id="input-with-icon-textfield"
            label="Hostel Fees 1st Year"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" style={{ fontWeight: 900 }}>
                  ₹
                </InputAdornment>
              ),
            }}
            variant="standard"
            fullWidth
            type="number"
            value={props.hf1}
            onChange={(e) => {
              setHF1(e.target.value);
              props.setHF1(e.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={12}>
          <TextField
            id="input-with-icon-textfield"
            label="Hostel Fees 2nd Year"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">₹</InputAdornment>
              ),
            }}
            variant="standard"
            fullWidth
            type="number"
            value={props.hf2}
            onChange={(e) => {
              setHF2(e.target.value);
              props.setHF2(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="input-with-icon-textfield"
            label="Hostel Fees 3rd Year"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">₹</InputAdornment>
              ),
            }}
            variant="standard"
            fullWidth
            type="number"
            value={props.hf3}
            onChange={(e) => {
              setHF3(e.target.value);
              props.setHF3(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="input-with-icon-textfield"
            label="Hostel Fees 4th Year"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">₹</InputAdornment>
              ),
            }}
            variant="standard"
            fullWidth
            type="number"
            value={props.hf4}
            onChange={(e) => {
              setHF4(e.target.value);
              props.setHF4(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="input-with-icon-textfield"
            label="CD"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">₹</InputAdornment>
              ),
            }}
            variant="standard"
            fullWidth
            type="number"
            value={props.cd}
            onChange={(e) => {
              setCD(e.target.value);
              props.setCD(e.target.value);
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}