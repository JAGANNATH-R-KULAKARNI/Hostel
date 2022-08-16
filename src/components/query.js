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




export default function MultipleSelect() {
    const theme = useTheme();
    const [age, setAge] = React.useState(10);
    const [announce, setAnnounce] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    // {
    //     announce ? (
    //         <AnnounceUI registerHandler={() => setAnnounce(!announce)} />
    //     ) : null
    // }

    const announcementPush = () => {
        setAnnounce(announce);
    }
    return (
        <center>
            <Grid direction={"column"}>
                <FormControl sx={{ m: 10, width: 700 }}>
                    <TextField

                        id="demo-helper-text-misaligned"
                        // placeholder="Enter your name"
                        label="Name"
                        sx={{ mb: 3 }}
                    />

                    <TextField

                        id="demo-helper-text-misaligned"
                        // placeholder="Enter your name"
                        label="USN"
                        sx={{ mb: 3 }}
                    />

                    <TextField

                        id="demo-helper-text-misaligned"
                        // placeholder="Enter your name"
                        label="Room number"
                        sx={{ mb: 3 }}
                    />

                    {/* <InputLabel id="demo-simple-select-label">Reason</InputLabel> */}
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                        sx={{ mb: 3 }}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <TextField
                        id="outlined-multiline-static"
                        label="Query"
                        multiline
                        rows={4}
                    // defaultValue="Default Value"
                    />

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
                        }}
                        onClick={announcementPush}
                    >
                        Submit
                    </Button>

                </FormControl>
            </Grid>


        </center >
    );
}