import React, { useEffect } from 'react'
import "./Menu.css"
import { supabase } from "../Supabase";
import { Button } from '@mui/material';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Update from './Update';


const Menu = () => {

    const [menus, setMenus] = React.useState([]);
    const [email, setEmail] = React.useState([]);
    const [breakfast, setbreakfast] = React.useState("");
    const [lunch, setlunch] = React.useState("");
    const [snacks, setsnacks] = React.useState("");
    const [dinner, setdinner] = React.useState("");


    const menuFetch = async () => {
        const { data, error } = await supabase.from('menu').select().order('id', { ascending: true });

        // for (let i = 0; i < data.length; i++) {
        //     setbreakfast(data[i].breakfast);
        //     setlunch(data[i].lunch);
        //     setsnacks(data[i].snacks);
        //     setdinner(data[i].dinner);
        // }
        setMenus(data);
        console.log(data);
    }

    async function fetchTheProfile() {
        const data = await supabase.auth.user();

        if (data) {
            // console.log(data);
            setEmail(data.email);
        }
    }

    useEffect(() => {
        menuFetch();
        setInterval(() => {
            fetchTheProfile();
        }, 1000);
    }, []);

    const updatebreakfast = (e) => {
        console.log("name " + e.target.name);
        console.log("value " + e.target.value);
        if (e.target.name == 1) {

            setbreakfast(e.target.value);
        }
    }


    return (
        <center>


            {
                process.env.REACT_APP_ADMIN2 == email ? (
                    <table id="customers">
                        <tr>
                            <th class="empty">Day of Week</th>
                            <th>Breakfast</th>
                            <th>Lunch</th>
                            <th>Evening snacks</th>
                            <th>Dinner</th>
                            <th>Operation</th>
                        </tr>
                        {
                            menus.map((day) => {

                                // breakfast = day.breakfast;


                                return (
                                    <tr key={day.id}>
                                        <th>{day.id}</th>

                                        <td>
                                            <Grid item xs={12} md={12} >
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    // label="Breakfast"
                                                    value={breakfast}
                                                    name={day.id}
                                                    // onChange={(e) => {
                                                    //     setbreakfast(e.target.value)
                                                    // }}
                                                    onChange={updatebreakfast}
                                                    multiline
                                                    rows={6}

                                                    sx={{ mb: 3, minWidth: "150px", width: "50%" }}
                                                // defaultValue="Default Value"
                                                />
                                            </Grid>
                                        </td>

                                        {/* <td>{day.breakfast}</td> */}
                                        <td>
                                            <Grid item xs={12} md={12} >
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    // label="Breakfast"
                                                    value={lunch}
                                                    onChange={(e) => {
                                                        setlunch(e.target.value);
                                                    }}
                                                    multiline
                                                    rows={6}
                                                    sx={{ mb: 3, minWidth: "150px", width: "50%" }}
                                                // defaultValue="Default Value"
                                                />
                                            </Grid>
                                        </td>
                                        <td>
                                            <Grid item xs={12} md={12} >
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    // label="Breakfast"
                                                    value={snacks}
                                                    onChange={(e) => {
                                                        setsnacks(e.target.value);
                                                    }}
                                                    multiline
                                                    rows={6}
                                                    sx={{ mb: 3, minWidth: "150px", width: "50%" }}
                                                // defaultValue="Default Value"
                                                />
                                            </Grid>
                                        </td>
                                        <td>
                                            <Grid item xs={12} md={12} >
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    // label="Breakfast"
                                                    value={dinner}
                                                    onChange={(e) => {
                                                        setdinner(e.target.value);
                                                    }}
                                                    multiline
                                                    rows={6}
                                                    sx={{ mb: 3, minWidth: "150px", width: "50%" }}
                                                // defaultValue="Default Value"
                                                />
                                            </Grid>
                                        </td>
                                        <td>
                                            {/* < Update break={day.breakfast} /> */}
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                sx={{
                                                    mt: 3,
                                                    mb: 2,
                                                    backgroundColor: "black",
                                                    color: "white",
                                                    borderRadius: "10px",
                                                    minWidth: "100px",
                                                    minHeight: "40px",
                                                    width: "5%"

                                                }}
                                                onClick={() => { < Update break="shreyas" /> }
                                                }

                                                href="/updatemenu"


                                            >
                                                update
                                            </Button>
                                        </td>
                                    </tr>

                                )



                            })

                        };


                    </table>

                ) : (
                    <table id="customers">
                        <tr>
                            <th class="empty">Day of Week</th>
                            <th>Breakfast</th>
                            <th>Lunch</th>
                            <th>Evening snacks</th>
                            <th>Dinner</th>

                        </tr>
                        {
                            menus.map((day, id) => {
                                return (
                                    <tr key={id}>
                                        <th>{day.day}</th>
                                        <td>{day.breakfast}</td>
                                        <td>{day.lunch}</td>
                                        <td>{day.snacks}</td>
                                        <td>{day.dinner}</td>

                                    </tr>
                                )

                            })

                        };
                    </table>
                )

            }


        </center >
    )
}

export default Menu