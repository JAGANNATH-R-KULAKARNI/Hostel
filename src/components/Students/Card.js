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

export default function CardForStudents(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card elevation={0}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            style={{ height: "70px", width: "70px" }}
            src={props.google["user_metadata"]["avatar_url"]}
          ></Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.user["name"]}
        subheader={
          props.user["usn"] + ", " + props.user["year_joined"] + " batch"
        }
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hello <span style={{ fontWeight: 700 }}>{props.user["name"]}</span>,
          welcome to our website. Your Email is
          <span style={{ fontWeight: 700 }}> {props.user["email"]}</span>.Your
          Phone Number is{" "}
          <span style={{ fontWeight: 700 }}>{props.user["phno"]}</span>. Contact
          administration for any changes.
        </Typography>
      </CardContent>
    </Card>
  );
}
