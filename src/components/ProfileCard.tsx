import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import { Staff } from "@think-zambia-foundation/api";
import Link from "next/link";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default function ProfileCard({ 
  staff,
}: { 
  staff: Staff
}) {
  const backgroundUrl =
    staff?.image?.thumbnail ||
    staff?.image?.src ||
    "/placeholder-profile-icon.png";

  const position = staff?.positions[0]?.job?.title;

  return (
    <Box
      sx={{
        "&:hover": {
          borderBottom: "5px solid #ab0520",
        },
        backgroundImage: `url(${backgroundUrl})`,
        backgroundColor: "whitesmoke",
        backgroundSize: "cover",
        backgroundPosition: "50%",
        backgroundRepeat: "no-repeat",
        height: "206px",
        width: "206px"
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
              height: "202px",
            },
            height: "206px",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0))",
          }}
        >
          <Grid item xs={12}>
            <CardContent>
              <Typography variant="body2" color="white" textTransform="uppercase" fontWeight="bold">
                {staff?.profile?.firstName ?? ""} {staff?.profile?.lastName ?? ""}<ArrowRightIcon fontSize="small" color="primary" />
              </Typography>
              <Typography variant="caption" fontWeight="bold" color="whitesmoke" textTransform="capitalize">
                {position}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Link>
    </Box>
  );
}
