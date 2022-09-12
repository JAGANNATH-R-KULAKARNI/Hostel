import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import DialogUI from "./Dialog";
import { supabase } from "../../../Supabase";
import Button from "@mui/material/Button";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardForStudent(props) {
  const [model, setModel] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const toggleModel = () => {
    setModel(!model);
  };
  
  async function deletestudent(e) {
    e.preventDefault();

    
   
    console.log("------------");
    //console.log(form.current);

    setProgress(0);
    var flagg = 0;
    

    
    
    const { data, error } = await supabase.from("students").delete().match({email: props.mail});
    var forCache = null;

    if (data) {
      forCache = await supabase.from("cache").delete().match({email:props.mail});
    } 
    if(error){
      alert("error");
    }
   
    if (forCache.data) {
      // const updateRooms = await supabase
      //   .from("rooms")
      //   .update({ occupied: roomInfo[0] - roomInfo[1] + 1 })
      //   .match({ id: roomId });

      console.log("Here I am");
      // console.log(updateRooms);

     
       // console.log(updateRooms.data);
        alert("Successfully Deleted");
        
    }

      if (forCache.error) {
        alert("Some Error Occured");
      }
    

    

    // if (error) {
    //   console.log(error);
    //   alert("some error has occured");
    // }

    setInterval(() => {
      setProgress(100);
    }, 2000);
  }

  return (
    <Card sx={{ maxWidth: 345, minWidth: 290 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#20B2AA" }} aria-label="recipe">
            {props.s_id}
          </Avatar>
        }
        action={
          <Button
            variant="contained"
            style={{
              backgroundColor: "#730000",
              color: "white",
              fontSize: "7px",
              marginTop: "10px",
            }}
            onClick={deletestudent}
          >
            delete
          </Button>
        }
        title={props.name}
        subheader={props.usn}
        subheader1={props.mail}
      />

      {model ? (
        <DialogUI
          
          name={props.name}
          email={props.mail}
          usn={props.usn}
          phno={props.phno}
          yoj={props.yoj}
          room={props.room}
          hf1={props.hf1}
          hf2={props.hf2}
          hf3={props.hf3}
          hf4={props.hf4}
          cd={props.cd}
          toggleModel={toggleModel}
        />
      ) : null}
    </Card>
  );
}
