import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { Staff } from "@think-zambia-foundation/api";
import Link from "next/link";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function ProfileCard({ staff }: { staff: Staff }) {
  const backgroundUrl =
    staff?.image?.thumbnail ||
    staff?.image?.src ||
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const position = staff?.positions[0]?.job?.title;

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
        height: "365px",
      }}
    >
      <Link href={`/team/${staff.staffId}/#team`}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          sx={{
            "&:hover": {
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2))",
              height: "360px",
            },
            height: "365px",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0))",
          }}
        >
          <Grid item xs={12}>
            <CardContent>
              <Typography variant="h6" color="white" textTransform="uppercase" fontWeight="bold">
                {staff?.profile?.firstName ?? ""} {staff?.profile?.lastName ?? ""}<ArrowRightIcon color="primary" />
              </Typography>
              <Typography variant="body2" color="whitesmoke" textTransform="uppercase">
                {position}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Link>
    </Box>
  );
}
