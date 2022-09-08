import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { supabase } from "../Supabase";
import StableUI from "./Stable";
import Paper from "@mui/material/Paper";

export default function Account(props) {
  const [students, setStudents] = React.useState(null);
  const [student, setStudent] = React.useState(null);
  const [email, setEmail] = React.useState("");
  const m1 = useMediaQuery("(min-width:600px)");

  async function fetchTheProfile() {
    const data = await supabase.auth.user();

    if (data) {
      const userDetails = await supabase
        .from("students")
        .select("*,rooms(*)")
        .eq("email", data["email"]);
      console.log("userDetails");
      console.log(userDetails);
      setStudents(userDetails["data"][0]);
    }
  }

  React.useEffect(() => {
    setInterval(() => {
      fetchTheProfile();
    }, 1000);
  }, []);

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: m1 ? "50px" : "30px",
          marginTop: m1 ? "40px" : "30px",
        }}
      >
        {" "}
        Account
      </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper
          variant="outlined"
          style={{ marginTop: m1 ? "00px" : "00px" }}
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, maxWidth: "100%" }}
        >
          <h3
            style={{
              textAlign: "center",
              fontSize: m1 ? "20px" : "20px",
              marginTop: m1 ? "10px" : "10px",
              width: "100%",
            }}
          >
            {/* {" "} */}
            {students && students["name"]}
            <br />
            {students && students["usn"]}
          </h3>
          <div
            style={{
              paddingLeft: m1 ? "0%" : "5%",
              paddingRight: m1 ? "0%" : "5%",
            }}
          >
            <StableUI
              mail={students && students["email"]}
              yoj={students && students["year_joined"]}
              phno={students && students["phno"]}
              usn={students && students["usn"]}
              hf1={students && students["hf1"]}
              hf2={students && students["hf2"]}
              hf3={students && students["hf3"]}
              hf4={students && students["hf4"]}
              cd={students && students["cd"]}
              block={students && students["rooms"]["block"]}
              hostel={students && students["rooms"]["hostel_name"]}
              floor={students && students["rooms"]["floor"]}
              room={students && students["rooms"]["room"]}
            />
          </div>
        </Paper>
      </div>
    </div>
  );
}
