import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Time from "./Time";
import React, { useState } from "react";
import moment from 'moment';
import 'moment/dist/locale/fr';
moment.locale('fr');

export default function DayTime({slots, reservedSlots}) {

  const [slot, setSlot] = useState([])
  
  const formatSlotDate = (slotDate) => {
    return moment(slotDate).format('dddd D MMMM');
  };

  const slotsByDay = slots.reduce((slotsByDay, slot) => {
    const slotDay = moment(slot.date).format('dddd D MMMM');
    if (!slotsByDay[slotDay]) {
      slotsByDay[slotDay] = [];
    }
    slotsByDay[slotDay].push(slot);
    return slotsByDay;
  }, {});

  const onClick = (e) => {
    console.log(e.target.dataset.id)
  }

  return (
    <Box sx={{ color: "white" }}>
      {Object.keys(slotsByDay).map((day) => (

        <Box sx={{ color: "white" }} key={day}>
                <Typography
        component="div"
        variant="h6"
        sx={{
          fontFamily: ["Plus Jakarta Sans"],
          fontWeight: 800,
          marginBottom: 5,
        }}
      >
       - {day} -
      </Typography>
          <ul>
            {slotsByDay[day].map((slot) => (
              <Button variant="outlined" sx={{ maxWidth: "75px", marginX: 1, marginBottom: 3 }} color={reservedSlots.includes(slot.id) ? "error" : "primary"} key={slot.id} data-id={slot.id} onClick={onClick}>{moment(slot.time, "HH:mm:ss").format("hh:mm")}</Button>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  );
}
