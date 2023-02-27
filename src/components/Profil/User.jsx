import { TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Cards from "../FindDoctors/Card";

export default function User({profile}) {
  return (
    <Container
      sx={{
        color: "white",
      }}
    >
      <Typography
        component="div"
        variant="h5"
        sx={{
          fontFamily: ["Plus Jakarta Sans"],
          fontWeight: 800,
          marginBottom: 5,
        }}
      >
        INFORMATIONS
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="N° Vital" color="error" value={profile.health_card_number} focused />
      </Box>
      <Box>
        <Typography
          component="div"
          variant="h5"
          sx={{
            fontFamily: ["Plus Jakarta Sans"],
            fontWeight: 800,
            marginY: 5,
          }}
        >
          MES RENDEZ-VOUS
        </Typography>
      </Box>
    </Container>
  );
}
