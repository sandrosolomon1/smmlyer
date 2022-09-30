import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/system';
import { Button, CardActions } from '@mui/material';
const servicesList = [
    {
        title: 'UNIFIED PORTAL OF E-SERVICES', href: 'MY.GOV.GE', desc: 'The Unified Portal of Electronic Services (MY.GOV.GE) is a unified web portal of electronic services in the public and private sector. Currently, there are more than 400 e-services available on the portal, which are available to mobile users on a "one-stop-shop" basis - only from one point, after registering on the portal and agreeing to the rules of using the portal.'
    },
    { title: 'NATIONAL AGENCY OF PUBLIC REGISTRYS', href: 'NAPR.GOV.GE', desc: `Real Estate Registry,Register of Entrepreneurs and Non-Entrepreneurial (Non-Commercial) Legal Entities, Information Services and Chancellery, Register of Economic Activities, Public Restriction and Tax Pledge / Mortgage Register, Mortgage / Leasing Register, Address register and etc.` },
    { title: 'REVENUE SERVICE', href: 'RS.GE', desc: 'Taxpayer Register, Granting the Small Business Status, Granting the Status of Micro Business, Granting status of a Virtual Zone Person, Granting of Status Fixed Tax (bakery, beauty salon), Tax Free Authorization and etc.' },
    { title: 'LAW OF GEORGIA ON ENTREPRENEURS', href: 'MATSNE.GOV.GE', desc: '"This Law regulates the legal forms of an entrepreneur, the procedures for their incorporation and registration, and issues related to their activities."' },
    { title: 'LAW OF GEORGIA ON THE LEGAL STATUS OF ALIENS AND STATELESS PERSONS', href: 'MATSNE.GOV.GE', desc: '"This Law regulates the legal basis and mechanisms for entry, stay, transit, and departure of aliens into/in/through/from Georgia; defines the rights and obligations of aliens and stateless persons, the types and procedures for removal of aliens staying in Georgia, and the scope of competence and responsibility of state institutions involved in the process of removal."' },
    { title: 'LAW OF GEORGIA TAX CODE OF GEORGIA', href: 'MATSNE.GOV.GE', desc: '"This Code defines, in accordance with the Constitution of Georgia, the general principles of formation and operation of the tax system of Georgia, the legal status of tax payers and competent authorities, the types of tax offences, the liability for violating the tax legislation of Georgia, the procedure and conditions for appealing wrongful acts of competent authorities and their officials, the procedure for settling tax disputes, and governs the legal relations connected with the fulfilment of tax liabilities."' },
    {
        title: 'GOVERNMENT OF GEORGIA ON APPROVAL OF THE PROCEDURES FOR REVIEWING AND DECIDING THE GRANTING OF GEORGIAN RESIDENCE PERMITS', href: 'MATSNE.GOV.GE', desc: '"The Procedures for Reviewing and Deciding the Granting of Georgian Residence Permits (the Procedure) determines the procedures and conditions for granting Georgian residence permits to aliens."'
    },
]
export default function LegalResources() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: 'url("https://www.nortonrosefulbright.com/-/media/images/nrf/nrf-transform/solutions-hero/legal-managed-services.jpg?sc_lang=en&revision=c1f296e8-73e1-4c5c-adf3-03b5a0c11384&revision=5249364975447387904&hash=8DF1375B6BE943877590095DA779CE76")',
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
                <Container sx={{ position: 'relative', zIndex: 2 }}>
                    <Grid container spacing={2} columns={{ sm: 8, md: 16 }}>
                        {servicesList.map((s, idx) => (
                            <Grid item xs={idx === 6 ? 16 : 8} key={idx}>
                                <Card sx={{ display: 'flex', boxShadow: 10, height: '100%', p: '1.5rem' }}>
                                    <CardContent sx={{ flex: 1 }}>
                                        <Typography component="h2" variant="h5">
                                            {s.title}
                                        </Typography>
                                        <Typography component="h3" variant="h6" sx={{ my: '0.5rem' }}>
                                            <a href={`https://${s.href}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                                                <Button sx={{ fontSize: 20 }}>{s.href}</Button>
                                            </a>
                                            <CheckCircleOutlineIcon fontSize='1' />
                                        </Typography>
                                        <Typography variant="subtitle1" paragraph>
                                            {s.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
