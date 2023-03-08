import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function UserAvailability({ appointments }) {
  console.log(appointments);
  return (
    <Container
      sx={{
        color: "white",
      }}
    >
      <Card>
        <CardHeader
          title="Docteur Jean Dupont"
          subtitle="Cardiology"
          avatar="https://example.com/doctor-avatar.png"
        />
        <CardMedia>
          <img
            src="https://example.com/appointment-image.jpg"
            alt="Appointment Image"
          />
        </CardMedia>
        <CardContent>
          <Typography variant="body1" color="textSecondary">
            Rendez-vous à
          </Typography>
          <Typography variant="button" color="primary">
            17:15
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Accéder au profil du docteur
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
