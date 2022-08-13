import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

<<<<<<< HEAD
export default function AddressForm() {
=======
export default function One(props) {
>>>>>>> f8743b87ac2612b89165519f075c215cd63319ee
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            id="Name"
            name="Name"
            label="Full Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            placeholder="Your Full Name"
<<<<<<< HEAD
=======
            value={props.name}
            onChange={(e) => {
              props.setName(e.target.value);
            }}
>>>>>>> f8743b87ac2612b89165519f075c215cd63319ee
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="usn"
            name="USN"
            label="USN"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            placeholder="Your College USN"
<<<<<<< HEAD
=======
            value={props.usn}
            onChange={(e) => {
              props.setUSN(e.target.value);
            }}
>>>>>>> f8743b87ac2612b89165519f075c215cd63319ee
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="yoj"
            name="yoj"
            label="Year Of Joining"
            fullWidth
            variant="standard"
            placeholder="Date Of Joining"
<<<<<<< HEAD
=======
            type="number"
            value={props.yoj}
            onChange={(e) => {
              props.setYoj(e.target.value);
            }}
>>>>>>> f8743b87ac2612b89165519f075c215cd63319ee
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
<<<<<<< HEAD
=======
            type="email"
>>>>>>> f8743b87ac2612b89165519f075c215cd63319ee
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            placeholder="Your College Email ID"
<<<<<<< HEAD
=======
            value={props.email}
            onChange={(e) => {
              props.setEmail(e.target.value);
            }}
>>>>>>> f8743b87ac2612b89165519f075c215cd63319ee
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phnum"
            name="phnum"
            label="Phone Number"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            placeholder="Your Phone Number"
<<<<<<< HEAD
=======
            type="number"
            value={props.phnum}
            onChange={(e) => {
              props.setPhnum(e.target.value);
            }}
>>>>>>> f8743b87ac2612b89165519f075c215cd63319ee
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
