import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#66B2FF",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              MyHealth
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | KITT | CGU | CDG`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};