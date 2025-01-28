import ProjectCard from "@/components/ProjectCard";
import { getProjects } from "@/lib/getProjects";
import { Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default async function Projects() {
  const projects = (await getProjects())?.splice(0, 2);

  return (
    <section>
      <Container id="projects">
        <Link href="/projects">
          <Typography
            sx={{
              display: { xs: 'none', md: 'block' }, // Larger screens only
            }}
            variant="h2"
            fontWeight="bold"
            align="left"
            gutterBottom>
            RESIDENTIAL<ArrowRightIcon color="primary" />
          </Typography>
          <Typography
            sx={{
              display: { xs: 'block', md: 'none' }, // Mobile only
            }}
            variant="h4"
            fontWeight="bold"
            align="left"
            gutterBottom>
            RESIDENTIAL<ArrowRightIcon color="primary" />
          </Typography>
        </Link>
      </Container>
      <Grid
        sx={{
          padding: 1,
        }}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        {projects?.map((project) => (
          <Grid item xs={12} sm={6} key={project.projectId}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}