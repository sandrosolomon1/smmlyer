import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';

export default function Registration() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: 'url("https://www.eureporter.co/wp-content/uploads/2022/07/relocation-agency-1920x1080-1.jpg")',
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
                        Relocation Packgage
                    </Typography>
                    <Typography component="h3" variant="h5">
                        Usually, relocation to another country, finding an apartment there, registering your own business and subsequent development, including finding an office space and hiring employees, always deals with various daily problems that can cause inconvenience, discomfort, loss of your time and be energy consuming. That is why, according to all your needs, we will take care of the entire procedure. So, just trust the experts and make your life easier.
                        <br></br>
                        <br></br>

                        Relocation Package is a comprehensive mix of our services. Our “expat-experts” can predict all your needs and requirements.
                        <br></br><br></br>


                        The first thing that comes to mind when moving is renting or buying a home. But this housing should truly become your new home. That is why while relocating to a foreign country is a way better to entrust the care of finding your new home to professionals who know all the local nuances. All you have to do is just point us to main criteria of your selection.
                        <br></br><br></br>


                        After getting settled in a new place, you always start thinking about the source of income, perhaps you prefer working as a freelance, or maybe you are planning to relocate a whole business to Georgia. In any case, it won't be your headache. All your needs will fall on our shoulders.
                        <br></br>
                        When deciding to relocate, you probably thought about the long-term prospects for staying in the country, in this case, you will definitely need residence permit, because without it the process of "assimilation" with society cannot be considered complete. A residence permit will allow you to feel that you have fully become a part of Georgian society.
                        <br></br><br></br>


                        The concept of complete relocation, of course, is much more extensive, it is also associated with cultural synthesis. You can get acquainted with the country and the mentality of the people in the best way by approaching culture and history. If you need to organize tours around the country, find a place to stay, or simple tips, you can always contact us for help.
                        <br></br><br></br>


                        The price for a relocation package starts from $850. You can compile such a package of relocation services that will correspond to your needs and wishes.
                        <br></br><br></br>


                        You can find more information about our services (opening a company, obtaining a residence permit and acquiring real estate) on the pages devoted to descriptions of these services on our website.
                        <br></br><br></br>


                        In case of any questions, you can book a free consultation. We will always help you to find the service that will meet your needs.

                    </Typography>
                </Container>
            </Box>
        </>
    );
}
