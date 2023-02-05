import { Box } from "@mui/system"
import Navbar from "../Navbar"
import User from "./User"
import UserHeader from "./UserHeader"

export default function Profil() {
    return(
        <div>
            <Navbar/>
            <Box sx={{ backgroundColor: "#032b53", marginBottom: 15 }}>
                <UserHeader/>
            </Box>
            <User/>
        </div>
    )
}