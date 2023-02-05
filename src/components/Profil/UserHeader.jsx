import { Avatar, Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function UserHeader() {
  return (
    <Container
      sx={{
        paddingTop: "100px",
        color: "white",
        display: "flex",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Avatar
            alt="Remy Sharp"
            src="https://www.radiofrance.fr/s3/cruiser-production/2022/12/0898afb2-8786-4b57-a585-b1473c6c4f82/1200x680_capture.png.jpg"
            sx={{
              width: 164,
              height: 164,
              position: "relative",
              top: "115px",
              border: 1,
            }}
          />
        </Grid>
        <Grid item xs={10} sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
          >
            <Typography
              component="div"
              variant="h3"
              sx={{
                marginRight: 1,
                fontFamily: ["Plus Jakarta Sans"],
                fontWeight: 700,
                letterSpacing: 3,
              }}
            >
              Alexis
            </Typography>
            <Typography
              component="div"
              variant="h3"
              sx={{
                fontFamily: ["Plus Jakarta Sans"],
                fontWeight: 800,
                letterSpacing: 5,
              }}
            >
              Morin
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <Typography
            component="div"
            variant="subtitle2"
            sx={{
              fontFamily: ["Plus Jakarta Sans"],
              fontWeight: 800,
              letterSpacing: 3,
            }}
          >
            Utilisateur depuis le 05/01/2023
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
