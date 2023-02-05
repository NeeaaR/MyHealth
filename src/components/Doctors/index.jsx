import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../Navbar";
import Disponibilities from "./Disponibilities";
import DoctorHeader from "./DoctorHeader";
import Stats from "./Stats";

export default function Doctors() {
  return (
    <div>
      <Navbar />
      <Box sx={{ backgroundColor: "#032b53", marginBottom: 15 }}>
        <DoctorHeader />
      </Box>
      <Container>
        <Stats/>
      </Container>
      <Disponibilities />
    </div>
  );
}
