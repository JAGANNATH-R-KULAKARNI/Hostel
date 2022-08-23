import React, { useEffect, useState } from 'react'
import "../Menu.css"
import { supabase } from "../../Supabase";
import { Button } from '@mui/material';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ButtonUI from "../Button2";



const DisplayQuery = () => {

    const [dquery, setDquery] = useState([]);

    return (
        <center>

            <table id="customers">
                <tr>
                    <th class="empty">Day of Week</th>
                    <th>Breakfast</th>
                    <th>Lunch</th>
                    <th>Evening snacks</th>
                    <th>Dinner</th>

                </tr>
                {
                    dquery.map((day, id) => {
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


        </center >
    )
}

export default DisplayQuery