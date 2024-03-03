import React, { useState } from "react";
import {
  Paper,
  Typography,
  Select,
  MenuItem,
  Container,
  Box,
  InputLabel,
} from "@mui/material";
import CelebrityEditor from "./components/CelebrityEditor";

function App() {
  // State to store the selected celebrity
  const [selectedCelebrity, setSelectedCelebrity] = useState("");

  // Array of menu items for One Direction members
  const oneDirectionMembers = [
    { value: "Harry", label: "Harry Styles" },
    { value: "Louis", label: "Louis Tomlinson" },
    { value: "Niall", label: "Niall Horan" },
    { value: "Liam", label: "Liam Payne" },
    { value: "Zayn", label: "Zayn Malik" },
  ];

  return (
    <Container maxWidth="lg">
      {/* Center content vertically */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        {/* Render the Paper component */}
        <Paper
          elevation={3}
          style={{
            padding: "20px",
            width: "75vh",
            height: "90vh",
            textAlign: "center",
          }}
        >
          {/* Title */}
          <Typography variant="h4" gutterBottom>
            Celebrity Paparazzi App
          </Typography>
          {/* Select component to choose a One Direction member */}
          <InputLabel id="demo-simple-select-label">Band member</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            value={selectedCelebrity}
            onChange={(event) => setSelectedCelebrity(event.target.value)}
            style={{ marginBottom: "20px", width: "50%" }}
          >
            {oneDirectionMembers.map((member) => (
              <MenuItem key={member.value} value={member.value}>
                {member.label}
              </MenuItem>
            ))}
          </Select>
          {/* Render the CelebrityEditor component */}
          <CelebrityEditor selectedCelebrity={selectedCelebrity} />
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
