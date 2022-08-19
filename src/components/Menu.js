import React from 'react'
import "./Menu.css"
import { supabase } from "../Supabase";


const Menu = () => {

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
                <tr>
                    <th>Monday</th>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
                </tr>
                <tr>
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
                </tr>
            </table>
        </center>
    )
}

export default Menu