import { Box, CardContent, Container, Grid, Typography } from "@mui/material";
import { useId } from "react";

export interface HeroImageProps {
    header?: string;
    subHeader?: string;
    centerText?: boolean;
    height?: number;
    gradient?: boolean;
    src?: string;
    removeBorder?: boolean;
}

export function HeroImage({
    header,
    subHeader,
    centerText,
    height,
    gradient = true,
    src,
    removeBorder
}: HeroImageProps) {
    return (
        <Box
            key={useId()}
            className="embla__slide"
            sx={[{
                backgroundImage: src ? `url(${src})` : "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                backgroundSize: "cover",
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                height: height ? `${height}px` : "625px",
            }, gradient && {
                borderBottom: removeBorder ? "none" : "7px solid #d12627",
            }]}
        >
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={[{
                    height: height ? `${height - 5}px` : "620px",
                }, gradient && {
                    backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.0) 25%, rgba(0,0,0,0.4) 100%)",
                }]}
            >
                <Grid item xs={12}>
                    <Container>
                        <CardContent>
                            <Typography
                                sx={{
                                    display: { xs: 'none', md: 'block' }, // Larger screens only
                                }}
                                variant="h2"
                                fontWeight="bold"
                                color="whitesmoke"
                                textTransform="uppercase"
                                textAlign={
                                    centerText ?
                                        "center" :
                                        "inherit"
                                }>
                                {header}
                            </Typography>
                            <Typography
                                sx={{
                                    display: { xs: 'block', md: 'none' }, // Mobile only
                                }}
                                variant="h4"
                                fontWeight="bold"
                                color="whitesmoke"
                                textTransform="uppercase"
                                textAlign={
                                    centerText ?
                                        "center" :
                                        "inherit"
                                }>
                                {header}
                            </Typography>
                            <Typography
                                sx={{
                                    display: { xs: 'none', md: 'block' }, // Larger screens only
                                }}
                                variant="h4"
                                color="whitesmoke"
                                textAlign={
                                    centerText ? "center" : "inherit"
                                }>
                                {subHeader}
                            </Typography>
                            <Typography
                                sx={{
                                    display: { xs: 'block', md: 'none' }, // Mobile only
                                }}
                                variant="h6"
                                color="whitesmoke"
                                textAlign={
                                    centerText ? "center" : "inherit"
                                }>
                                {subHeader}
                            </Typography>
                        </CardContent>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}