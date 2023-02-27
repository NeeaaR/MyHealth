import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import DayTime from "./DayTime";
import Time from "./Time";

export default function Disponibilities({slots}) {
  return (
    <Container sx={{ color: "white", marginY: 3}}>
      <Box>
        <Typography
          component="div"
          variant="h4"
          sx={{
            fontFamily: ["Plus Jakarta Sans"],
            fontWeight: 800,
            marginBottom: 5,
          }}
        >
          Mes disponibilités
        </Typography>
        <DayTime slots={slots}/>
      </Box>
    </Container>
  );
}
