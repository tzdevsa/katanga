import { Box, BoxProps, IconButton, IconButtonProps } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";

export function SocialMedia({
    facebook,
    github,
    instagram,
    linkedIn,
    x,
    color = "inherit",
    sx
}: {
    facebook?: string,
    github?: string,
    instagram?: string,
    linkedIn?: string,
    x?: string,
    color?: IconButtonProps["color"]
    sx?: BoxProps["sx"]
}) {
    return <Box component="div" sx={sx}>
        {linkedIn && (
            <IconButton color={color} href={linkedIn} target="_blank" rel="noreferrer">
                <LinkedInIcon />
            </IconButton>
        )}
        {facebook && (
            <IconButton color={color} href={facebook} target="_blank" rel="noreferrer">
                <FacebookIcon />
            </IconButton>
        )}
        {instagram && (
            <IconButton color={color} href={instagram} target="_blank" rel="noreferrer">
                <InstagramIcon />
            </IconButton>
        )}
        {x && (
            <IconButton color={color} href={x} target="_blank" rel="noreferrer">
                <XIcon />
            </IconButton>
        )}
        {github && (
            <IconButton color={color} href={github} target="_blank" rel="noreferrer">
                <GitHubIcon />
            </IconButton>
        )}
    </Box>;
}
