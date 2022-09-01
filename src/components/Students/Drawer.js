import * as React from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useSelector, useDispatch } from "react-redux";
import { openAnnouncements } from "../Redux/actions/index";
import NotificationsUI from "./Notifications";
import { supabase } from "../../Supabase";

const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[900],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

function SwipeableEdgeDrawer(props) {
  const { window } = props;
  //   const [open, setOpen] = React.useState(false);
  const open = useSelector((state) => state.toggleModalStatus);
  const dispatch = useDispatch();

  const toggleDrawer = (newOpen) => () => {
    dispatch(openAnnouncements());
  };

  const updateNoti = async () => {
    console.log("broooooooooooooooooooo");
    console.log(props.user);
    console.log(props.announcements);
    const notiUpdated = await supabase
      .from("cache")
      .update({ notification_status: props.announcements.length })
      .match({ email: props.user["email"] });

    if (notiUpdated.data) {
      console.log("Successfully updated notifications");
      toggleDrawer(false);
    }

    if (notiUpdated.error) {
      console.log(notiUpdated.error.message);
      toggleDrawer(false);
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(75% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      {/* <Box sx={{ textAlign: "center", pt: 1 }}>
        <Button onClick={toggleDrawer(true)}>Open</Button>
      </Box> */}
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
        >
          <Puller />
          <Typography
            sx={{
              p: 2,
              color: "text.secondary",
              textAlign: "center",
              // backgroundColor: "#D5A418",
              backgroundColor: "#20B2AA",
              color: "white",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              fontWeight: 700,
            }}
          >
            {open ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Button
                  variant="contained"
                  style={{ backgroundColor: "black" }}
                  onClick={updateNoti}
                >
                  Mark as Read
                </Button>
              </div>
            ) : (
              "Notifications"
            )}
          </Typography>
        </StyledBox>
        <br />
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <NotificationsUI
            data={props.announcements}
            user={props.user}
            notiState={props.notiState}
          />
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
