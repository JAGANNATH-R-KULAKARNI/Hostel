import React, { useEffect } from 'react'
import "./Menu.css"
import { supabase } from "../Supabase";
import { Button } from '@mui/material';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ButtonUI from "./Button2";



const Menu = () => {

    const [menus, setMenus] = React.useState([]);
    const [email, setEmail] = React.useState([]);
    const [breakfast, setbreakfast] = React.useState([]);
    const [lunch, setlunch] = React.useState([]);
    const [snacks, setsnacks] = React.useState([]);
    const [dinner, setdinner] = React.useState([]);
    const [final, setfinal] = React.useState([]);


    const menuFetch = async () => {
        const { data, error } = await supabase.from('menu').select().order('id', { ascending: true });
        console.log("Inside MenuFetch");
        console.log(data);
        setMenus(data);
        console.log(menus);
        const temp = [];
        const temp2 = [];
        const temp3 = [];
        const temp4 = [];
        for (var i = 0; i < data.length; i++) {
            temp.push(data[i].breakfast);
            temp2.push(data[i].lunch);
            temp3.push(data[i].snacks);
            temp4.push(data[i].dinner);
        }
        setbreakfast(temp);
        setlunch(temp2);
        setsnacks(temp3);
        setdinner(temp4);

        // console.log(breakfast[0]+"array");
        // console.log(data[1].breakfast+"database");
        // console.log(data);
    }

    async function fetchTheProfile() {
        const data = await supabase.auth.user();

        if (data) {
            // console.log(data);
            setEmail(data.email);
        }
    }

    async function sendmenu(temf) {
        console.log("Inside send menu");
        console.log(temf);
        const { data, error } = await supabase.from("menu").update(temf);

        if (data) {
            alert("Successfully Updated");
        }

        if (error) {
            alert("Something went wrong");
        }

    }

    const updateIt = () => {

        let tempf = [];

        for (var i = 0; i < breakfast.length; i++) {

            tempf.push({
                id: i + 1,
                breakfast: breakfast[i],
                lunch: lunch[i],
                snacks: snacks[i],
                dinner: dinner[i]
            });
        }

        // console.log(tempf);
        setfinal(tempf);
        console.log("final array");
        // console.log(final);
        sendmenu(tempf);

    }

    useEffect(() => {
        menuFetch();
        setInterval(() => {
            fetchTheProfile();
        }, 1000);
    }, []);



    return (
        <center>


            {
                process.env.REACT_APP_ADMIN2 == email ? (
                    <div>
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
                                            <td>
                                                <Grid item xs={12} md={12} >
                                                    <TextField
                                                        id="outlined-multiline-static"
                                                        // label="Breakfast"

                                                        value={breakfast[day.id - 1]}

                                                        onChange={(e) => {
                                                            // alert(e.target.value);
                                                            // alert(day.id);
                                                            // console.log(breakfast);
                                                            const temp = [];
                                                            for (var i = 0; i < breakfast.length; i++) {
                                                                if (day.id == i + 1) {
                                                                    temp.push(e.target.value);

                                                                }
                                                                else {
                                                                    temp.push(breakfast[i]);
                                                                }
                                                            }
                                                            setbreakfast(temp);

                                                        }}
                                                        multiline
                                                        rows={6}
                                                        sx={{ mb: 3, minWidth: "220px", width: "50%" }}
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
                                                        value={lunch[day.id - 1]}
                                                        onChange={(e) => {
                                                            const temp2 = [];
                                                            for (var i = 0; i < lunch.length; i++) {
                                                                if (day.id == i + 1) {
                                                                    temp2.push(e.target.value);

                                                                }
                                                                else {
                                                                    temp2.push(lunch[i]);
                                                                }
                                                            }
                                                            setlunch(temp2);
                                                        }}
                                                        multiline
                                                        rows={6}
                                                        sx={{ mb: 3, minWidth: "220px", width: "50%" }}
                                                    // defaultValue="Default Value"
                                                    />
                                                </Grid>
                                            </td>
                                            <td>
                                                <Grid item xs={12} md={12} >
                                                    <TextField
                                                        id="outlined-multiline-static"
                                                        // label="Breakfast"
                                                        value={snacks[day.id - 1]}
                                                        onChange={(e) => {
                                                            const temp3 = [];
                                                            for (var i = 0; i < snacks.length; i++) {
                                                                if (day.id == i + 1) {
                                                                    temp3.push(e.target.value);

                                                                }
                                                                else {
                                                                    temp3.push(snacks[i]);
                                                                }
                                                            }
                                                            setsnacks(temp3);
                                                        }}
                                                        multiline
                                                        rows={6}
                                                        sx={{ mb: 3, minWidth: "220px", width: "50%" }}
                                                    // defaultValue="Default Value"
                                                    />
                                                </Grid>
                                            </td>
                                            <td>
                                                <Grid item xs={12} md={12} >
                                                    <TextField
                                                        id="outlined-multiline-static"
                                                        // label="Breakfast"
                                                        value={dinner[day.id - 1]}
                                                        onChange={(e) => {
                                                            const temp4 = [];
                                                            for (var i = 0; i < dinner.length; i++) {
                                                                if (day.id == i + 1) {
                                                                    temp4.push(e.target.value);

                                                                }
                                                                else {
                                                                    temp4.push(dinner[i]);
                                                                }
                                                            }
                                                            setdinner(temp4);
                                                        }}
                                                        multiline
                                                        rows={6}
                                                        sx={{ mb: 3, minWidth: "220px", width: "50%" }}
                                                    // defaultValue="Default Value"
                                                    />
                                                </Grid>
                                            </td>

                                        </tr>

                                    )



                                })

                            };


                        </table>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 5,
                                backgroundColor: "black",
                                color: "white",
                                borderRadius: "10px",
                                minWidth: "200px",
                                minHeight: "50px",
                                width: "60%"

                            }}
                            // sx={{ mb: 3, minWidth: "200px", width: "50%" }}
                            checked={updateIt}
                        >
                            Update
                        </Button>
                    </div>


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