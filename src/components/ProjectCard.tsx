import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { Project } from "@think-zambia-foundation/api";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  const backgroundUrl =
    project?.image?.thumbnail ||
    project?.image?.src ||
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <Box
      sx={{
        "&:hover": {
          borderBottom: "5px solid #d12627",
        },
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        height: {
          xs: "275px",
          sm: "524px",
        },
      }}
    >
      <Link href={`/projects/${project.projectId}`}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          sx={{
            "&:hover": {
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2))",
              height: "519px",
            },
            height: {
              xs: "275px",
              sm: "524px",
            },
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0))",
          }}
        >
          <Grid item xs={12}>
            <CardContent>
              <Typography variant="body2" color="whitesmoke" textTransform="uppercase">
                {project?.address?.city ?? ""}
                {project?.address?.province && `, ${project.address.province}`}
              </Typography>
              <Typography component="h6" variant="body2" color="white" textTransform="uppercase" fontWeight="bold">
                {project?.name ?? ""}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Link>
    </Box>
  );
}
