import { Container } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../Navbar";
import Disponibilities from "./Disponibilities";
import DoctorHeader from "./DoctorHeader";
import Stats from "./Stats";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserById } from "../../actions/profile";
import isLoading from "../Loading";
import AddSlot from "../DoctorsForm/AddSlot";

export default function Doctors() {

  //get id from url
  const { id } = useParams();

  const {
      profile: { profile, loading },
      auth
  } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUserById(id));
  }, [dispatch, id]);
    
  if (loading || profile === null) {
      return <h1>Loading...</h1>
  }  
  return (
    <div>
      <Navbar />
      <Box sx={{ backgroundColor: "#032b53", marginBottom: 15 }}>
        <DoctorHeader user={profile.profile}/>
      </Box>
      <Container>
        <Stats/>
      </Container>
      <Disponibilities slots={profile.available_slots} />
      <AddSlot/>
    </div>
  );
}
