import { CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../Navbar";
import DoctorHeader from "./DoctorHeader";
import Stats from "./Stats";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../actions/profile";
import { getReservedSlotIds } from "../../actions/appointments";
import isLoading from "../Loading";
import AddSlot from "../DoctorsForm/AddSlot";
import DayTime from "./DayTime";

export default function Doctors() {
  //get id from url
  const { id } = useParams();

  const {
    profile: { profile, loading },
    auth,
    appointment: { appointments },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const { user } = auth;

  const AddDisponibilities = () => {
    if (user.id == id) {
      return <AddSlot user={user} />;
    }
  };

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getReservedSlotIds(id));
  }, [dispatch, id]);

  if (loading || profile === null) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2, color: "white" }}>
          Chargement en cours...
        </Typography>
      </Box>
    );
  }
  return (
    <div>
      <Navbar />
      <Box sx={{ backgroundColor: "#032b53", marginBottom: 15 }}>
        <DoctorHeader user={profile.profile} />
      </Box>
      <Container>
        <Stats />
        <Typography
          component="div"
          variant="h5"
          sx={{
            fontFamily: ["Plus Jakarta Sans"],
            fontWeight: 800,
            color: "white",
            marginBottom: 5,
          }}
        >
          Mes disponibilités
        </Typography>
        <DayTime slots={profile.available_slots} reservedSlots={appointments} />
        {AddDisponibilities()}
      </Container>
    </div>
  );
}
