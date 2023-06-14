import React from 'react';
import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

function Navbar() {
    return (
        <Box display="flex" justifyContent="space-between" p={2} className="navbar">

            <Box className="nav-logo-name" display="flex" alignItems="center">
                <Link href="/">
                        <div className="nav-logo">
                            <img src={"/static/images/FMLOGO.png"} alt="logo" width={70} height={50}/>
                        </div>
                </Link>
            </Box>

            <Box display="flex" alignItems="center" style={{ marginTop: '14px' }}>
                <div className="nav-btn-group">
                    <Link href="/" passHref>
                        <button id="home-button">Home</button>
                    </Link>
                    <Link href="/" passHref>
                        <button id="design-button">Design</button>
                    </Link>
                    <Link href="/" passHref>
                        <button id="showcase-button">Showcase</button>
                    </Link>

                </div>
            </Box>

            <Box display="flex" alignItems="center" style={{ marginTop: '14px' }}>
                <IconButton
                    color="primary"
                    component="a"
                    href="https://www.linkedin.com/in/farid-mehdipour/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-icon"
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    color="primary"
                    component="a"
                    href="https://github.com/Faridmhp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-icon"
                >
                    <GitHubIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Navbar;
