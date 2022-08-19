import React, { useEffect } from 'react'
import "./Menu.css"
import { supabase } from "../Supabase";


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
                </tr>
                {
                    menus.map((day, id) => {
                        return (
                            <tr>
                                <th>{day.day}</th>
                                <td>{day.breakfast}</td>
                                <td>{day.lunch}</td>
                                <td>{day.snacks}</td>
                                <td>{day.dinner}</td>
                            </tr>)

                    })

                };


                {/* <tr>
                    <th>Tuesday</th>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                </tr>
                <tr>
                    <th>Wednesday</th>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                </tr>
                <tr>
                    <th>Thursday</th>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                </tr>
                <tr>
                    <th>Friday</th>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                </tr>
                <tr>
                    <th>Saturday</th>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                </tr>
                <tr>
                    <th>Sunday</th>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                </tr> */}
            </table>
        </center>
    )
}

export default Menu