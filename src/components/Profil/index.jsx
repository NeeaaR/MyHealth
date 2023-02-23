import { Box } from "@mui/system"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfileById } from "../../actions/profile"
import Navbar from "../Navbar"
import User from "./User"
import UserHeader from "./UserHeader"

const Profil = () => {
    const { user } = useSelector(state => state.auth)

    const { test } = useSelector(state => state.auth)

    console.log(user)

    return(
        <div>
            <Navbar/>
            <Box sx={{ backgroundColor: "#032b53", marginBottom: 15 }}>
                <UserHeader user={user}/>
            </Box>
            <User user={user}/>
        </div>
    )
}

export default Profil;