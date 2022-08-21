import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Theme, useTheme } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button } from '@mui/material';
import { supabase } from "../Supabase";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function Update() {
    const theme = useTheme();
    const [reason, setReason] = React.useState("Wi-Fi Problem");
    const [brief, setBrief] = React.useState("");
    const [name, setName] = React.useState("");
    const [room, setRoom] = React.useState("");
    const [usn, setUsn] = React.useState("");


    async function queryPush() {

        if (usn.length == 0 || name.length == 0 || reason.length == 0 || brief.length == 0 || room.length == 0) {
            alert("Please fill all fields");
            return;
        }

        const { data, error } = await supabase.from("query").insert([
            {
                s_usn: usn,
                name: name,
                reason: reason,
                room: room,
                brief: brief
            },
        ]);
        if (data) {
            alert("Your Query received Successfully");
            setUsn("");
            setName("");
            setRoom("");
            setReason("");
            setBrief("");
        }
        if (error) {
            console.log(error);
            alert("some error has occured");
        }


    }
    return (
        <center>
            <h1>Update Menu</h1>
            <Grid>
                <FormControl sx={{ m: 10, flexGrow: 1 }}>
                    <Grid container spacing={3}>

                        <Grid item xs={12} md={12} >
                            <TextField
                                id="outlined-multiline-static"
                                label="Breakfast"
                                value={brief}
                                onChange={(e) => {
                                    setBrief(e.target.value);
                                }}
                                multiline
                                rows={6}
                                sx={{ mb: 3, minWidth: "200px", width: "50%" }}
                            // defaultValue="Default Value"
                            />
                        </Grid>
                        <Grid item xs={12} md={12} >
                            <TextField
                                id="outlined-multiline-static"
                                label="Lunch"
                                value={brief}
                                onChange={(e) => {
                                    setBrief(e.target.value);
                                }}
                                multiline
                                rows={6}
                                sx={{ mb: 3, minWidth: "200px", width: "50%" }}
                            // defaultValue="Default Value"
                            />
                        </Grid>
                        <Grid item xs={12} md={12} >
                            <TextField
                                id="outlined-multiline-static"
                                label="Snacks"
                                value={brief}
                                onChange={(e) => {
                                    setBrief(e.target.value);
                                }}
                                multiline
                                rows={6}
                                sx={{ mb: 3, minWidth: "200px", width: "50%" }}
                            // defaultValue="Default Value"
                            />
                        </Grid>
                        <Grid item xs={12} md={12} >
                            <TextField
                                id="outlined-multiline-static"
                                label="Dinner"
                                value={brief}
                                onChange={(e) => {
                                    setBrief(e.target.value);
                                }}
                                multiline
                                rows={6}
                                sx={{ mb: 3, minWidth: "200px", width: "50%" }}
                            // defaultValue="Default Value"
                            />
                        </Grid>
                        <Grid item xs={12} md={12} >
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
                                    minHeight: "50px",
                                    width: "50%"

                                }}
                                // sx={{ mb: 3, minWidth: "200px", width: "50%" }}
                                onClick={queryPush}
                            >
                                Submit
                            </Button>
                        </Grid >
                    </Grid>
                </FormControl >
            </Grid>
        </center >
    );
}