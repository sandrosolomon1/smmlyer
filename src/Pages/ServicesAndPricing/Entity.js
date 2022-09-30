import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';

export default function Entity() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: 'url("https://glcgroup.ge/img/blog/165528775212.jpg")',
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
                        Set Up a Legal Entity
                    </Typography>
                    <Typography component="h3" variant="h5">
                        In Georgia there are several different types of legal entities and among them LLC (Limited Liability Company) is the most popular one. Georgia is on 7th place in world ranking among 190 countries in easy of doing business. In order to register LLC in Georgia, initial capital is not required. The liability of this legal entity to creditors is limited only to property. Partners (founders) are not responsible for the obligations of the company, which in turn is associated with lower risks. LLC can be founded by one or more persons. Tax rates: 15% profit tax; 5% tax on dividend; 18 %VAT (if applicable). The profit of the company is not taxed until it is distributed among the shareholders. Some IT sector LLCs may qualify for a virtual zone with incredible tax benefits.
                        <br></br><br></br>


                        Formation of the Limited Liability Company (LLC) is much difficult and requires more documentation then registering Individual Entrepreneur, but with our help the procedure can be comfortable and time-saving. The only document required from you is your passport.
                        <br></br><br></br>


                        Service fee is 400$ and includes:
                        <br></br><br></br>


                        Drafting bilingual charter/statute.
                        <br></br><br></br>
                        Drafting bilingual Articles of the association (application form).
                        <br></br><br></br>
                        Registration at the Public Service Hall.
                        <br></br><br></br>
                        Legal Address for company.
                        <br></br><br></br>
                        Registration on my.gov.ge web portal.
                        <br></br><br></br>
                        Translation of the extract (after legal entity is registered).
                        <br></br><br></br>
                        Registration at tax authorities.
                        <br></br><br></br>
                        Full accompaniment.
                        <br></br><br></br>
                        Registration Fee.
                        <br></br><br></br>


                        Additional 100 $ for express registration.
                        <br></br><br></br>
                        Additional 100 $ for remote registration.
                        <br></br><br></br>
                        Additional 100 $ for opening bank account.
                        <br></br><br></br>


                        If you have any kind of questions regarding taxes and/or registration procedure, feel free to reach out to us for your complementary consultation.

                    </Typography>
                </Container>
            </Box>
        </>
    );
}
