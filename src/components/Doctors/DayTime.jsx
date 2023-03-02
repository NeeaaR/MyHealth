import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Time from "./Time";
import React, { useState } from "react";

// export default function DayTime({slots}) {
//   return (
//     <Box sx={{ color: "white" }}>
//       <Typography
//         component="div"
//         variant="h6"
//         sx={{
//           fontFamily: ["Plus Jakarta Sans"],
//           fontWeight: 800,
//           marginBottom: 5,
//         }}
//       >
//        - Lundi 02 Févrirer -
//       </Typography>
//       <Time />
//       <Time />
//       <Time />
//       <Time />
//     </Box>
//   );
// }


export default function DayTime({slots}) {
  console.log(slots)
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
       - Lundi 02 Février -
      </Typography>
      <Button variant="outlined" sx={{ maxWidth: "75px", marginX: 1, marginBottom: 3 }}>7:15</Button>
      
    </Box>
  );
}