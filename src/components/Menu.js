import React from 'react'
import "./Menu.css"
import { supabase } from "../Supabase";


async function menuFetch() {
    const { data, error } = await supabase.from('menu').select().order('id', { ascending: true });
    return data;
    // console.log(data);
}


const Menu = async () => {
    let a=10;
    let data=[];
    data = await menuFetch();
    
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
                    data.map((day,id)=>{
                        console.log(day.breakfast);
                    return(
                    <tr>
                    <th>Monday</th>
                    <td>{day.breakfast}</td>
                    <td>chicken</td>
                    <td>chicken</td>
                    <td>chicken</td>
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