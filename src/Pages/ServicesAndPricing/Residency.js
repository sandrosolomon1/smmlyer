import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/system';

export default function Residency() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: 'url("https://i0.wp.com/bynapse.com/wp-content/uploads/2022/03/Legal.jpeg?fit=2121%2C1414&ssl=1")',
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
                        Legal Residency
                    </Typography>
                    <Typography component="h3" variant="h5">
                        If you would like to stay in Georgia for a long time period and you want to become as native as it is possible, Georgian residence permit will help you.
                        <br></br>
                        There are various options of a residence permit in Georgia and all of them have their own different obtaining basis and certain benefits. As soon as you are granted a Georgian residence permit, you and your family members will be able to obtain the permit as well, under your sponsorship.
                        <br></br>
                        <br></br>

                        There are many different ways to obtain residence permit in Georgia: work residence permit, study permit, family reunification residence permit, residence permit based on property ownership and many more. You should apply for residence permit maximum 40 days before your legal stay in Georgia is expired.
                        <br></br>
                        <br></br>

                        Work residence permit – in order to obtain work residence permit in Georgia the following documents/information is required:
                        <br></br>
                        <br></br>

                        Application of an established form.
                        <br></br>
                        Document evidencing your legal stay in Georgia (visa stamp).<br></br>
                        <br></br>
                        Your passport.<br></br>
                        <br></br>
                        Certificate of non-conviction in your country (optional).<br></br>
                        <br></br>
                        Document issued from Revenue Service, confirming that yours (as Individual Entrepreneur’s)/or your employer company’s turnover for the last one year was minimum 50 000 GEL per one foreign employee.<br></br>
                        <br></br>
                        Notice about how many foreign employees does your company have, or how many foreign employees are there in your IE (the notice is required even if you are sole proprietor and you do not hire anyone).<br></br>
                        <br></br>
                        Bank notice that you have sufficient funds on your account/or notice from employer company about your salary – specified amount should be at least fivefold amount of minimum subsistence defined in Georgia, considering the duration of the labor residence permit.
                        <br></br>
                        Photo 3x4 in size.
                        <br></br>
                        Receipt certifying the payment of service fee.
                        <br></br>
                        <br></br>
                        Family reunification residence permit – to obtain family reunification residence permit in Georgia the following documentation/information is required:
                        <br></br>  <br></br>


                        Application of an established form.
                        <br></br>
                        Document evidencing your legal stay in Georgia (visa stamp).
                        <br></br>
                        Your passport.
                        <br></br>
                        Certificate of non-conviction in your country (optional).
                        <br></br>
                        Document evidencing kinship (marriage certificate, birth certificate). The copies of original documents, should be notarized and apostilled and after they are brought in Georgia, they should be translated in Georgian and notarized.
                        <br></br>
                        Bank notice that you have sufficient funds on your accounts – specified amount should be at least double amount of minimum subsistence defined in Georgia, considering the duration of the family reunification residence permit.
                        <br></br>
                        Photo 3×4 in size.
                        <br></br>
                        Receipt certifying the payment of service fee.
                        <br></br><br></br>

                        Residence permit based on property ownership (short – term) – to obtain residence permit based on property ownership the following documentation/information is required:
                        <br></br>
                        Application of an established form.
                        <br></br>
                        Document evidencing your legal stay in Georgia (visa stamp).
                        <br></br>
                        Your passport.
                        <br></br>
                        Certificate of non-conviction in your country (optional).
                        <br></br>
                        Property evaluation report (property value should exceed 100.000$).
                        <br></br>
                        Photo 3×4 in size.
                        <br></br>
                        Receipt certifying the payment of service fee.
                        <br></br><br></br>

                        Price starts from 350$. The price does not include the government fee for registration:
                        <br></br><br></br>
                        30 working days – 300 GEL
                        <br></br>
                        20 working days – 450 GEL
                        <br></br>
                        10 working days – 600 GEL
                        <br></br><br></br>
                        Schedule Your Free Consultation Today! We’re looking forward to discussing your needs and wishes!
                    </Typography>
                </Container>
            </Box>
        </>
    );
}
