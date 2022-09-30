import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('user_name'),
            last: data.get('user_last'),
            email: data.get('user_email'),
            country: data.get('user_country'),
            country: data.get('user_country'),
            mobile: data.get('user_mobile'),
            currentLocation: data.get('user_currentLocation'),
            comm: data.get('user_comm'),
            message: data.get('user_message')
        });
        sendEmail(event);
    };

    const form = React.useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j7pdpcn', 'template_0bwc04f', form.current, '5euLcFUp0sl_1HK0x')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{
            }}>
                <CssBaseline />
                <Box
                    sx={{
                        py: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Box component="form" ref={form} noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="filled"
                                    autoComplete="given-name"
                                    name="user_name"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="user_last"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="user_email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    name="user_country"
                                    label="Country of Citizenship"
                                    id="user_country"
                                    autoComplete="Tbilisi"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    name="user_mobile"
                                    label="Mobile phone number"
                                    id="mobile"
                                    autoComplete="+995000000"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    name="user_currentLocation"
                                    label="Please specify your current location (Country)"
                                    id="currentLocation"
                                    autoComplete="Georgia"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    name="user_comm"
                                    label="Preferred communication method"
                                    id="comm"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    multiline
                                    rows={4}
                                    name="user_message"
                                    label="Message"
                                    id="message"
                                    autoComplete="Hello, my name is Benzie..."
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}