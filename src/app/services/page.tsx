import { getServices } from "@/actions/getServices";
import ServiceCard from "@/components/ServiceCard";
import { Container, Grid } from "@mui/material";
import { Service } from "@think-zambia-foundation/api";
import { headers } from "next/headers";

export default async function AboutPage() {
  const requestHeaders = await headers();
  const organisationId = requestHeaders.get("x-organisation-id");
    
  let services = null;
  if (organisationId) {
    services = await getServices(organisationId);
  }

  return (
    <main>
      <section id="team">
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            {services?.map((service: Service) => (
              <Grid key={service.serviceId} item xs={12} sm={4}>
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </main>
  );
}
