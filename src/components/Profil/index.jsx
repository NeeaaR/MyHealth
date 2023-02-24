import { Box } from "@mui/system"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfileById } from "../../actions/profile"
import Navbar from "../Navbar"
import User from "./User"
import UserHeader from "./UserHeader"

const Profil = props => {
    const {
        profile: { profile, loading },
        auth
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProfileById(props.match.params.id));
    }, [dispatch, props.match.params.id]);

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