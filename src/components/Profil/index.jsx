import { Box } from "@mui/system"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProfileById } from "../../actions/profile"
import Navbar from "../Navbar"
import User from "./User"
import UserHeader from "./UserHeader"

const Profil = () => {

    const { id } = useParams();
    const {
        profile: { profile, loading },
        auth
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(dispatch(getProfileById(id)));
        dispatch(getProfileById(id));
    }, [dispatch, id]);
    if (loading || profile === null) {
        return <h1>Loading...</h1>
    }
    return(
        <div>
            <Navbar/>
            <Box sx={{ backgroundColor: "#032b53", marginBottom: 15 }}>
                <UserHeader user={profile}/>
            </Box>
            <User user={profile}/>
        </div>
    )
}

export default Profil;