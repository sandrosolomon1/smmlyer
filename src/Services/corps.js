import * as React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const clients = [
    { title: 'EffectBerry', desc: 'Saleforce oriented IT company' },
    { title: 'Pouch of Coffee', desc: 'Specialty Coffee' },
    { title: 'EffectBerry', desc: 'Saleforce oriented IT company' },
    { title: 'EffectBerry', desc: 'Saleforce oriented IT company' },
    { title: 'EffectBerry', desc: 'Saleforce oriented IT company' },
    { title: 'EffectBerry', desc: 'Saleforce oriented IT company' },
]

export default function Corps() {
    return (
        <>
            <Grid container columns={{ sm: 8, md: 24 }} spacing={2}>
                {(clients.map(c => (
                    <Grid xs={8}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: '3rem' }}>
                            <img src="https://pbs.twimg.com/profile_images/592621158526255104/FKVURf62_400x400.jpg" alt="ben" style={{ borderRadius: '50%', width: '30%' }} />
                            <Box sx={{ mt: '1rem' }}>
                                <Typography component="h2" variant="h5" align='center' color='#fff'>
                                    {c.title}
                                </Typography>
                                <Typography component="h2" variant="subtitle1" align='center' color='#fff'>
                                    {c.desc}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                )))}
            </Grid>
        </>
    )
}