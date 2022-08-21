import React, { useEffect } from 'react'
import "./Menu.css"
import { supabase } from "../Supabase";
import { Button } from '@mui/material';


const Menu = () => {

    const [menus, setMenus] = React.useState([]);

    const menuFetch = async () => {
        const { data, error } = await supabase.from('menu').select().order('id', { ascending: true });
        setMenus(data);
    }

    useEffect(() => {
        menuFetch();
    }, []);

    return (
        <center>
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
                    menus.map((day, id) => {
                        return (
                            <tr key={id}>
                                <th>{day.day}</th>
                                <td>{day.breakfast}</td>
                                <td>{day.lunch}</td>
                                <td>{day.snacks}</td>
                                <td>{day.dinner}</td>
                                <td>
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

                                        href="/updatemenu"
                                    // sx={{ mb: 3, minWidth: "200px", width: "50%" }}

                                    >
                                        update
                                    </Button>
                                </td>
                            </tr>
                        )

                    })

                };
            </table>
        </center>
    )
}

export default Menu