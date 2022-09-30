import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';

export default function Registration() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: 'url("https://beamian.com/wp-content/uploads/2020/08/Building_an_event_registration_strategy-scaled.jpg")',
                    backgroundPosition: 'right',
                    backgroundSize: 'cover',
                    py: { xs: '5rem', sm: '3rem' },
                    position: 'relative'
                }}
            >
                <Box sx={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'black',
                    opacity: 0.7,
                    transition: "all ease .8s",
                    position: 'absolute',
                    zIndex: 1,
                    top: 0
                }} />
                <Container sx={{ position: 'relative', zIndex: 2, color: '#fff' }}>
                    <Typography component="h2" variant="h2" sx={{ mb: '2rem' }}>
                        IE + SBS Registration
                    </Typography>
                    <Typography component="h3" variant="h5">
                        If you are willing to start a successful freelance business, where you are a sole proprietor with small business status, your choice should definitely be Georgia, where you can enjoy incredible tax benefits. If the annual turnover of your business is less than 500,000 GEL (approx.165,000 US dollars), you will have the opportunity to obtain the status of a small business, the tax rate will be only 1%. If your income is from clients (B2B; B2C) based in any foreign country, your income will not be VATable in Georgia.
                        <br></br>
                        <br></br>

                        Our fully-accompanied service will ensure you to set up quickly and professionally - registration takes 2-3 business days. We will help you easily and comfortably run the whole procedure. The only document required from you is your passport.
                        <br></br>
                        <br></br>

                        Service fee is 200$ and includes:
                        <br></br>
                        <br></br>

                        Registration at the Public Service Hall.
                        <br></br><br></br>
                        Legal address for registration.
                        <br></br><br></br>
                        Registration on my.gov.ge online web portal.
                        <br></br><br></br>
                        Translation of the extract (after IE is registered).
                        <br></br><br></br>
                        Registration at tax authorities.
                        <br></br><br></br>
                        Obtaining Small Business Status (tax 1%).
                        <br></br><br></br>
                        Full accompaniment.
                        <br></br><br></br>
                        Registration Fee.
                        <br></br>
                        <br></br>

                        Additional 50$ for express registration.
                        <br></br>
                        Additional 100$ for remote registration.
                        <br></br>
                        Additional 50$ for opening bank account.
                        <br></br>
                        <br></br>

                        If you have any kind of questions regarding taxes and/or registration procedure, feel free to reach out to us for your complementary consultation.
                    </Typography>
                </Container>
            </Box>
        </>
    );
}
