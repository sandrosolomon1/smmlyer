import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Header from './header/Header';
import './App.css';
import { Card, CardContent, CardMedia } from '@mui/material';
import { useRef } from 'react';
import Messenger from './messenger/Messenger';
import Main from './Main';
import { Outlet } from 'react-router-dom';

const sections = [
  { title: 'About', url: '/', id: 1 },
  { title: 'Services & Pricing', url: '#', id: 2 },
  { title: 'FAQ', url: 'faq', id: 3 },
  { title: 'Legal Resources', url: 'legalresources', id: 4 },
];

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [buttonHovered, setButtonHovered] = React.useState(false);
  const contactRef = useRef(null);

  const handleClick = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header scroll={handleClick} sections={sections} title="SmMyler" />
      <Outlet context={[contactRef]} />
      <Box sx={{ backgroundColor: 'primary.sec', pt: '3rem', pb: '3rem' }}>
        <Container>
          <Card sx={{ display: 'flex', boxShadow: 10, height: '40vh' }}>
            <CardContent sx={{ flex: 1, p: 12 }}>
              <Typography component="h2" variant="h4" sx={{ pb: 4 }}>
                Working Hours
              </Typography>
              <Typography variant="subtitle1" paragraph color='black'>
                Monday – Friday 09:00 – 19:00
              </Typography>
              <Typography variant="subtitle1" paragraph color='black'>Saturday – Sunday 11:00 – 17:00 (only consultations)</Typography>
              <Typography variant="subtitle1" paragraph color='black'>Break time 12:30 – 13:30</Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: '40%', display: { xs: 'none', sm: 'block' } }}
              image='https://source.unsplash.com/random'
              alt='alt'
            />
          </Card>
        </Container>
      </Box>
      <Container maxWidth="sm">
        <Box sx={{ mt: 4 }}>
          <Copyright />
        </Box>
      </Container>
      <Messenger />
    </>
  );
}
