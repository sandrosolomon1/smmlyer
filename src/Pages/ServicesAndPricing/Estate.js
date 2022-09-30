import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';

export default function Registration() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: 'url("https://assets.entrepreneur.com/content/3x2/2000/1591900317-GettyImages-1137516784.jpg")',
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
                        Real Estate
                    </Typography>
                    <Typography component="h3" variant="h5">
                        Acquiring property or investing in real estate is a serious decision that requires due diligence. Decision to the acquire property must be legally correct to make a deal, to observe all the necessary legal procedures. It is necessary to double check all legal defects, which the property may have and proper procedure for a comprehensive inspection of the property before buying it. Buying real estate is a difficult and risky business if you do not have a legal education or do not buy real estate from people you can trust. To protect yourself from unscrupulous sellers, use the service supporting real estate transactions in Georgia.
                        <br></br><br></br>
                        We will help in the search and selection of real estate in accordance with your criteria and prepare a property sale-purchase contract or double-check the existing one. We will accompany you while the registration and transfer of ownership procedure.
                        <br></br><br></br>
                        The price starts from 400$ and includes:
                        <br></br><br></br>
                        Premium consultations with our representatives during whole pre-purchase procedure.
                        <br></br><br></br>
                        Checking all legal defects of the property (due diligence).
                        <br></br><br></br>
                        Renew the extract of the property.
                        <br></br><br></br>
                        Preparing real estate pre purchase and/or purchase agreement or revising sellers’ agreement drafted by the         seller.
                        <br></br><br></br>
                        Assistance with the registration & title transfer proceedings at the Public Service Hall or notary Agency.
                        <br></br><br></br>
                        All registration and translation fees.
                        <br></br>
                        <br></br>

                        Additional 100$ for express registration.
                        <br></br>
                        Additional 300$ for searching real estate.
                        <br></br>
                        <br></br>

                        Schedule Your Free Consultation Today! We’re looking forward to discussing your needs and wishes!
                    </Typography>
                </Container>
            </Box>
        </>
    );
}
