import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Time from "./Time";

export default function DayTime() {
  return (
    <Box sx={{ color: "white" }}>
      <Typography
        component="div"
        variant="h6"
        sx={{
          fontFamily: ["Plus Jakarta Sans"],
          fontWeight: 800,
          marginBottom: 5,
        }}
      >
       - Lundi 02 Févrirer -
      </Typography>
      <Time />
      <Time />
      <Time />
      <Time />
    </Box>
  );
}
