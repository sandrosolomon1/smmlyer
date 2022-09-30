import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';

export default function Registration() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: 'url("https://www.cloudlinkeduk.com/wp-content/uploads/2016/05/21.jpg")',
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
                        Other Services
                    </Typography>
                    <Typography component="h3" variant="h5">
                        In addition, we provide accounting services, which means maintaining the taxpayer's personal account, drawing up declarations and all kinds of consultations; mediation in notarial activities and translation services in accordance with international standards; representing in relationship with governmental bodies.
                        <br></br><br></br>


                        In a foreign country, it can be difficult to deal with all the nuances of doing business immediately. That is why we offer a different range of services that can help you with this:
                        <br></br><br></br>


                        - Qualified assistance in completing monthly declarations
                        <br></br>
                        - Accounting services
                        <br></br>
                        - Tax consultations
                        <br></br>
                        - Mediation in relations with notaries
                        <br></br>
                        - Translation services
                        <br></br>
                        - Supporting and representation with all government agencies (Public Service Hall, Tax authorities, City Hall, Banks, etc.)
                        <br></br>
                        <br></br>

                        The prices vary and depend on your needs and services choose by you.
                        <br></br>
                        <br></br>

                        For more information, please contact us and/or book our free consultation.
                    </Typography>
                </Container>
            </Box>
        </>
    );
}
