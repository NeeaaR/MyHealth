import { Container } from "@mui/system"


export default function UserAvailability({slots}) {

    console.log(slots)
    return(
        <Container      sx={{
            color: "white",
          }}>
            <h1>Availability</h1>
        </Container>
    )
}