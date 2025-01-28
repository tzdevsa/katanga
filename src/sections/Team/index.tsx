import {
  Container,
  Grid,
} from "@mui/material";
import ProfileCard from "@/components/ProfileCard";
import { Staff } from "@think-zambia-foundation/api";
import { getStaff } from "@/lib/getStaff";

export default async function Team() {
  const staff = await getStaff();

  console.log(staff);
  return (
    <section id="team">
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={3}
        >
          {staff?.map((staff) => (
            <Grid key={staff.staffId} item xs={12} sm={4}>
              <ProfileCard staff={staff} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}


{/* <Profile
  linkedIn="https://www.linkedin.com/in/latrice-umeh-8a72b159/"
/> 

* <Profile    
    credentials="Victor Umeh holds a Bachelor of Science in Civil Engineering with a minor in Business Marketing from the University of Arizona."
    linkedIn="https://www.linkedin.com/in/victor-umeh-entrepreneur/"
    quote="At Umeh Construction, we are dedicated to creating exceptional results by focusing on projects we are passionate about, ensuring that we exceed expectations every time."
  /> */}

