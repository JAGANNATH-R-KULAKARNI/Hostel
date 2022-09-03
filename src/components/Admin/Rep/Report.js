import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import logo from "./Logo.png";
import "./report.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body4,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const Item2 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body4,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 10,
  lineHeight: "60px",
}));

const Item3 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body4,
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: 30,
  maxHeight: 7700,
  lineHeight: "60px",
}));

const Item4 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body4,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 5,
  lineHeight: "60px",
}));
const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const constrols = [[1], [1, 2], [1, 2, 3], []];

export default function Report(props) {
  return (
    <Grid container spacing={2}>
      {[darkTheme].map((theme, index) => (
        <Grid item xs={12} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
                // gridTemplateColumns: { md: "1fr 1fr" },
                gap: 2,
              }}
            >
              <Item key={1} elevation={24} style={{ backgroundColor: "black" }}>
                <img
                  src={logo}
                  height={50}
                  width={50}
                  alt="NIE"
                  style={{
                    backgroundColor: "white",
                    padding: "2px",
                    borderBottomLeftRadius: "30px",
                    borderBottomRightRadius: "30px",
                    borderTopRightRadius: "7px",
                    borderTopLeftRadius: "7px",
                    marginTop: "5px",
                  }}
                />
              </Item>
              <Item key={2} elevation={24} style={{ backgroundColor: "black" }}>
                Attendence Report
              </Item>
              <Item key={3} elevation={24} style={{ backgroundColor: "black" }}>
                {props.building} , {"Block - "}
                {props.block}
              </Item>
              <Item2
                key={4}
                elevation={24}
                style={{ backgroundColor: "white" }}
              ></Item2>

              {props.report &&
                props.report.map((item) =>
                  item["data"].length > 0 ? (
                    <Item3
                      key={"floor" + item["floor"]}
                      elevation={24}
                      style={{
                        backgroundColor: "black",
                        border: "1px solid white",
                      }}
                    >
                      {"Floor No -  " + item["floor"]}
                      <div
                        style={{
                          backgroundColor: "white",
                          height: "6px",
                          width: "100%",
                          borderRadius: "10px",
                        }}
                      ></div>
                      <div style={{ marginTop: "-20px" }}>
                        {item["data"] &&
                          item["data"].map((room, room_index) => {
                            return room["data"].length > 0 ? (
                              <div>
                                <p>Room No - {room["room"]}</p>
                                <table
                                  style={{ width: "100%", marginTop: "-20px" }}
                                >
                                  <tr style={{ width: "100%" }}>
                                    <th style={{ width: "25%" }}>Date</th>
                                    {room["data"][0]["data"].length > 0 &&
                                      room["data"][0]["data"].map(
                                        (student_idd, stu_index_id) => {
                                          return (
                                            <th
                                              key={"student_idd" + stu_index_id}
                                              style={{
                                                width: `${
                                                  75 /
                                                  room["data"][0]["data"].length
                                                }%`,
                                                fontSize: "8px",
                                              }}
                                            >
                                              <p
                                                style={{
                                                  display: "block",
                                                }}
                                              >
                                                {
                                                  student_idd["data"]["data"][
                                                    "students"
                                                  ]["name"]
                                                }
                                              </p>
                                            </th>
                                          );
                                        }
                                      )}
                                    {constrols[
                                      3 - room["data"][0]["data"].length - 1 >=
                                      0
                                        ? 3 - room["data"][0]["data"].length - 1
                                        : 3
                                    ].map((item, index) => {
                                      return (
                                        <th key={"student_idddd" + index}>
                                          ---
                                        </th>
                                      );
                                    })}
                                  </tr>
                                  <tr style={{ width: "100%" }}>
                                    <th style={{ width: "25%" }}>ID</th>
                                    {room["data"][0]["data"].length > 0 &&
                                      room["data"][0]["data"].map(
                                        (student_idd, stu_index_id) => {
                                          return (
                                            <th
                                              key={"student_idd" + stu_index_id}
                                              style={{
                                                width: `${25}%`,
                                              }}
                                            >
                                              {" "}
                                              {
                                                student_idd["data"]["data"][
                                                  "students"
                                                ]["s_id"]
                                              }
                                            </th>
                                          );
                                        }
                                      )}
                                    {constrols[
                                      3 - room["data"][0]["data"].length - 1 >=
                                      0
                                        ? 3 - room["data"][0]["data"].length - 1
                                        : 3
                                    ].map((item, index) => {
                                      return (
                                        <th key={"student_idddd" + index}>
                                          ---
                                        </th>
                                      );
                                    })}
                                  </tr>
                                  {room["data"].map((igkey, index_igkey) => {
                                    return (
                                      <tr
                                        style={{ width: "100%" }}
                                        key={
                                          "TimingsOfStudentsOfRoom" +
                                          index_igkey
                                        }
                                      >
                                        <td>{igkey["time"]}</td>
                                        {igkey["data"].map(
                                          (stu_id_igkey, stu_index_igkey) => {
                                            return (
                                              <td
                                                style={{
                                                  width: "25%",
                                                  backgroundColor: stu_id_igkey[
                                                    "data"
                                                  ]["data"]["status"]
                                                    ? "#4DF73E"
                                                    : "#FF0000",
                                                  color: "white",
                                                  fontWeight: 900,
                                                  fontSize: "15px",
                                                }}
                                                key={
                                                  "TStatusOfStudentsOfRoom" +
                                                  stu_index_igkey
                                                }
                                              >
                                                {stu_id_igkey["data"]["data"][
                                                  "status"
                                                ]
                                                  ? "P"
                                                  : "A"}
                                              </td>
                                            );
                                          }
                                        )}
                                        {constrols[
                                          3 -
                                            room["data"][0]["data"].length -
                                            1 >=
                                          0
                                            ? 3 -
                                              room["data"][0]["data"].length -
                                              1
                                            : 3
                                        ].map((item, index) => {
                                          return (
                                            <td
                                              key={
                                                "studdd3d3ddd3t_idddd" + index
                                              }
                                            >
                                              ---
                                            </td>
                                          );
                                        })}
                                      </tr>
                                    );
                                  })}
                                </table>
                              </div>
                            ) : null;
                          })}
                      </div>
                    </Item3>
                  ) : null
                )}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
