import { Grid } from "@mui/material"
import { Container } from "@mui/system"
import Cards from "./Card"

export default function Doctors() {
    return(
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} direction="row" justifyContent="center" alignItems="center" Cards spacing={3}>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
        </Grid>
    )
}