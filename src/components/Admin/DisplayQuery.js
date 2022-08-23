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

    const queryFetch = async () => {
        const { data, error } = await supabase.from('query').select();
        setDquery(data);
        
    }
    useEffect(() => {
        queryFetch();
    },[]);
    return (
        <center>

            <table id="customers">
                <tr>
                    <th>USN</th>
                    <th>Name</th>
                    <th>Building</th>
                    <th>Room</th>
                    <th>Reason</th>
                    <th>Brief</th>

                </tr>
                {
                    dquery.map((query,id) => {
                        return (
                            <tr key={id}>
                                <th>{query.s_usn}</th>
                                <td>{query.name}</td>
                                <td>{query.building}</td>
                                <td>{query.room}</td>
                                <td>{query.reason}</td>
                                <td>{query.brief}</td>
                                

                            </tr>
                        )

                    })

                };
            </table>


        </center >
    )
}

export default DisplayQuery