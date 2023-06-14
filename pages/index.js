import React from 'react';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

const StyledStarIcon = styled(StarIcon)({
  color: 'black', // replace 'red' with the color you want
});

const StyledButton = styled(Button)({
  background: 'transparent',
  color: '#D9C990',
  textDecoration: 'none',
  fontFamily: 'Montserrat, sans-serif',
  border: '2px solid #2F4B71',
  padding: '10px 10px 10px 40px',
  fontSize: '12px',
  // update the URL to point to your local or public image
  backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/COMdoWZ.png)',
  backgroundSize: '12px 12px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '7% 50%',
  borderRadius: '5px',
  transitionProperty: 'all',
  transitionDuration: '.5s',
  '&:hover': {
    color: '#FFFFFF',
    backgroundColor: '#2F4B71',
    // update the URL to point to your local or public image
    backgroundImage: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/rFQ5dHA.png)',
    backgroundSize: '12px 12px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '10% 50%',
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: '.5s',
  },
  padding: '10px 10px 10px 40px',
  margin: '50px 10px 10px 10px',
  overflow: 'hidden',
});

const StyledComingSoonSection = styled('div')({
  color: 'white',
  padding: '30px',
  textAlign: 'center',
  backgroundColor: 'transparent',
});

const HomePageContent = () => {
  useEffect(() => {
    // Add the class when the component is mounted
    document.body.classList.add('homePage-body');

    // Remove the class when the component is unmounted
    return () => {
      document.body.classList.remove('homePage-body');
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 0,
              color: 'white',
              backgroundColor: '#839292',
              margin: '20px',
              borderRadius: '10px',
              overflow: 'hidden', // hide the image overflow
            }}
          >
            <Grid container item xs={12} spacing={0}>
              <Grid item xs={12} sm={8} md={8}>
                <img
                  src={"/static/images/street.jpg"}
                  alt="your-name"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Grid>
              <Grid item className="responsive-font-title" xs={12} sm={4} md={4}>
                <Typography
                  variant="h2"
                  sx={{ fontSize: { xs: '2em', sm: '1.6em' }, marginLeft: 2, marginTop: 2, color: '#e0e0e0' }}
                >
                  FARID MHP : VOL. 1
                </Typography>
                <Grid
                  container
                  spacing={3}
                  className="responsive-font-items"
                  sx={{ fontSize: { xs: '2em', sm: '0.4em' }, marginLeft: -0.9, marginTop: -2, color: '#000000' }}
                >
                  <Grid item>
                    <Typography variant="body1" sx={{ fontSize: { xs: '2em', sm: '1.9em' } }}>
                      2023
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" sx={{ fontSize: { xs: '2em', sm: '1.9em' } }}>
                      25 years
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" sx={{ fontSize: { xs: '2em', sm: '1.9em' } }}>
                      Action
                    </Typography>
                  </Grid>
                </Grid>
                <Rating
                  name="customized-10"
                  defaultValue={5}
                  max={10}
                  icon={<StyledStarIcon />} // Use the styled icon
                  emptyIcon={<StyledStarIcon style={{ opacity: 0.55 }} />} // half filled icon
                  sx={{ ml: 1.5, marginTop: 1 }} // Add a left margin
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '1em', sm: '0.8em' },
                    marginLeft: 2,
                    marginTop: 1,
                    padding: 1,
                    color: '#000000',
                  }}
                >
                  This is a short description about the movie. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <StyledButton variant="contained">Read more</StyledButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <StyledComingSoonSection>
            <Typography variant="h3">Coming Soon</Typography>
            <Typography variant="body1">Stay tuned for more exciting updates!</Typography>
          </StyledComingSoonSection>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePageContent;
