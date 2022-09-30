import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './App.css';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LanguageIcon from '@mui/icons-material/Language';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import Services from './Services/Services';
import Corps from './Services/corps';
import CustomerFeed from './Services/CustomerFeed';
import Contact from './Services/Contact';
import { useOutletContext } from 'react-router-dom';

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

export default function Main(props) {
    const [contactRef] = useOutletContext();
    const [buttonHovered, setButtonHovered] = React.useState(false);

    return (
        <>
            <Box>
                <div className="background" style={{ width: '100%', position: 'relative' }}>
                    <Box
                        sx={{
                            height: '80vh',
                            backgroundImage: 'url("https://content.thriveglobal.com/wp-content/uploads/2019/01/Lawyer.jpeg")',
                            backgroundPosition: 'right',
                            backgroundSize: 'cover',
                            p: { xs: '5rem', sm: '10rem' },
                        }}
                    >
                        <div style={{ zIndex: 3, position: 'relative' }}
                            onMouseEnter={() => setButtonHovered(true)}
                            onMouseLeave={() => setButtonHovered(false)}
                        >
                            <Typography variant='h1' color='#fff' align='left'>
                                SmMyler
                            </Typography>
                            <Typography variant='h5' color='primary.text' align='left' sx={{ py: 2 }}>
                                Make Your Life Easier
                            </Typography>
                            <Typography variant='h6' color='primary.text' align='left'>
                                SmMyler is a group of young and experienced immigration and legal specialists. <br></br>
                                We offer full-service business establishment, relocation, immigration, real estate purchase, and tax solutions in Georgia.<br></br>
                                If you are a business owner or an individual willing to start your new life in Georgia,<br></br>
                                we will support and assist the process from start to finish and make this process trouble-free and affordable for you.
                            </Typography>
                        </div>
                    </Box>
                    <Box sx={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'black',
                        opacity: buttonHovered ? 0.6 : 0.7,
                        transition: "all ease .8s",
                        position: 'absolute',
                        zIndex: 2,
                        top: 0
                    }} />
                </div>
            </Box>
            <Box>
                <Container maxWidth="xl">
                    <Box sx={{ my: '3rem' }}>
                        <Typography variant='h2' color='primary.sec' sx={{ fontWeight: 400, mb: '1rem' }} align='center'>
                            Why Us?
                        </Typography>
                        <Typography variant='h6' color='primary.sec' align='center'>
                            One space concept - the solution to your questions
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', mt: 10, marginBottom: '4rem', justifyContent: 'space-between' }}>
                        <Box>
                            <QuickreplyIcon sx={{
                                color: 'primary.sec', fontSize: 50, width: '100%', mb: '1rem'
                            }} />
                            <Typography sx={{ mb: '1rem' }} variant='h5' color='primary.sec' align='center'>Quick response</Typography>
                            <Typography variant='body1' color='primary.sec' align='center'>You will receive a response to your request within 30 minutes.</Typography>
                        </Box>
                        <Box>
                            <MonetizationOnIcon sx={{
                                color: 'primary.sec', fontSize: 50, width: '100%', mb: '1rem'
                            }} />
                            <Typography sx={{ mb: '1rem' }} variant='h5' color='primary.sec' align='center'>Fixed price guarantee</Typography>
                            <Typography variant='body1' color='primary.sec' align='center'>No unexpected price changes.</Typography>
                        </Box>
                        <Box>
                            <LanguageIcon sx={{
                                color: 'primary.sec', fontSize: 50, width: '100%', mb: '1rem'
                            }} />
                            <Typography sx={{ mb: '1rem' }} variant='h5' color='primary.sec' align='center'>Tri-Lingual competent specialists</Typography>
                            <Typography variant='body1' color='primary.sec' align='center'>You will receive a response to your request within 30 minutes.</Typography>
                        </Box>
                        <Box>
                            <HistoryToggleOffIcon sx={{
                                color: 'primary.sec', fontSize: 50, width: '100%', mb: '1rem'
                            }} />
                            <Typography sx={{ mb: '1rem' }} variant='h5' color='primary.sec' align='center'>Timeliness</Typography>
                            <Typography variant='body1' color='primary.sec' align='center'>Timely and safety execution.</Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ backgroundColor: 'primary.sec', pt: '1rem', pb: '3rem' }}>
                <Box sx={{ my: '3rem' }}>
                    <Typography variant='h2' color='#fff' sx={{ fontWeight: 400, textShadow: '2px 2px black' }} align='center'>
                        Our Services
                    </Typography>
                </Box>
                <Container maxWidth="lg">
                    <Services />
                </Container>
            </Box>
            <Box sx={{
                backgroundImage: 'url("https://wallpaper.dog/large/20512813.jpg")',
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
                py: '3rem',
                position: 'relative'
            }}>
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'black',
                    opacity: buttonHovered ? 0.6 : 0.7,
                    transition: "all ease .8s",
                    position: 'absolute',
                    zIndex: 1,
                    top: 0
                }} />
                <Box sx={{ mb: '3rem', position: 'relative', zIndex: 2 }}>
                    <Typography variant='h2' color='#fff' sx={{ fontWeight: 400, textShadow: '2px 2px black' }} align='center'>
                        Our corporate clients
                    </Typography>
                </Box>
                <Container sx={{ position: 'relative', zIndex: 3 }}>
                    <Corps />
                </Container>
            </Box>
            <Box sx={{ backgroundColor: 'primary.sec', pt: '3rem', pb: '3rem' }}>
                <Box sx={{ mb: '3rem', position: 'relative', zIndex: 2 }}>
                    <Typography variant='h2' color='#fff' sx={{ fontWeight: 400, textShadow: '2px 2px black' }} align='center'>
                        Customer Feedback
                    </Typography>
                    <Typography variant='h6' color='primary.text' align='center'>
                        Over 100 satisfied customers
                    </Typography>
                </Box>
                <Container>
                    <CustomerFeed />
                </Container>
            </Box>
            <Box ref={contactRef} sx={{
                position: 'relative',
                display: 'flex'
            }}>
                <img
                    src="https://assets.entrepreneur.com/content/3x2/2000/20180626193945-GettyImages-825574432.jpeg"
                    alt="img"
                    width='50%'
                />
                <Box sx={{
                    height: '100%',
                    width: '50%',
                    backgroundColor: 'black',
                    opacity: buttonHovered ? 0.6 : 0.7,
                    transition: "all ease .8s",
                    position: 'absolute',
                    zIndex: 1,
                    left: 0
                }}>
                </Box>
                <Box sx={{ position: 'absolute', zIndex: 2, pt: 32, px: 16, width: '50%' }}>
                    <Typography variant='h1' align='left' color='white'>Contact Us</Typography>
                    <Typography variant='h6' align='left' color='rgb(209, 216, 227)'>
                        Thank you for visiting our website! If you would like to get a free introductory consultation, please contact us.
                        We will respond on the same day.
                    </Typography>
                    <Typography variant='h6' align='left' color='rgb(209, 216, 227)'>Email: infosmmyler@gmail.com</Typography>
                    <Typography variant='h6' align='left' color='rgb(209, 216, 227)'>Phone: +995 593 907 201</Typography>
                </Box>
                <Contact />
            </Box>
        </>
    );
}
