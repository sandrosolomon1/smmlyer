import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import Grid from '@mui/material/Grid';
import { Box, Container } from '@mui/system';
import { Button, CardActions } from '@mui/material';
const servicesList = [
    {
        title: 'IE + SBS', desc: () => (
            <Typography variant="subtitle1" paragraph>
                1. Can I use personal bank account for IE purposes?
                <br></br>
                a.Yes, you can use personal bank account for IE purposes.
                <br></br><br></br>
                2. Who can apply for Small Business Status(1% TAX)?
                a.An individual entrepreneur shall not be granted the status of a small business if he / she carries out activities prohibited for a small business.Such activities are: gambling activities; medical, architecture, consulting and etc.for more information please book free consultation.
                <br></br><br></br>
                3. Is Small Business Status activating immediately ?
                a.The Status is activating from the 1st day of the next month.
                <br></br><br></br>

                4. Are declarations annually or monthly ?
                a.Small Business Status declarations are monthly.Deadline is 15th of each month and you are declaring for previous month.
                <br></br><br></br>
                5. Can I fill in declarations on tax websites from abroad ?
                a.Yes, you can fill in declarations from abroad, for that you will need Georgian phone number with active roaming.
                <br></br><br></br>
                6. Shall I fill in declarations in case if I do not have income for previous month ?
                a.Yes, you should fill in ZERO declaration.
            </Typography>
        )
    },
    {
        title: `LLC`, desc: () => (
            <Typography variant="subtitle1" paragraph>
                1. Can the LLC have only foreigner partner?
                a.Yes.
                <br></br><br></br>
                2. How can I get registered in Virtual Zone ?
                a.To register company in virtual zone, first of all, the company’s business activities should be in IT industry.Additionally, you will need Georgian IT specialists.In virtual zone the tax benefits only on services provided abroad.
                <br></br><br></br>
                3. Is it necessary for the company to indicate all the fields of activity during the registration, is it possible to add other activities later ?
                a.In general, while registration, the charter indicates that company can do any business which is acceptable by Georgian law.After registration in Revenue Service portal, you are indicating exactly what activities does the company have.Those activities you can change and / or add easily.
            </Typography>
        )
    },
    {
        title: `Real Estate Purchasing`, desc: () => (
            <Typography variant="subtitle1" paragraph>
                1. What documents do I need to purchase real estate in Georgia?
                a.Passport and purchase agreement.
                <br></br><br></br>
                2. How many days does it take to register & title transfer proceedings ?
                a.From 1 to 4 business days.
                <br></br><br></br>
                3. Can I get residence permit if I am the property owner in Georgia ?
                a.Yes, you can if you meet the required criteria.For more information, please see our service field about residence permits in Georgia.
            </Typography>
        )
    },
    {
        title: `Residence permit`, desc: () => (
            <Typography variant="subtitle1" paragraph>
                1. For residence permit purposes, which relatives are considered as family members?
                a.Minor children and spouse only.Only for “short - term” residence permit, family members can be adult children as well.
                <br></br><br></br>
                2. To obtain residence permit based on real estate, shall I own one property, which is valued for 100.000$ or several properties will work as well ?
                a.To obtain residence permit based on property ownership, you can be the owner of one property or several properties which are estimated at 100.000$.
                <br></br><br></br>
                3. If my income has reached GEL 50.000 in less than a year, can I apply for a work permit without waiting for one year to expire ?
                a.Yes, it is not necessary to wait for the expiration of one year in this case.
                <br></br><br></br>
                4. How can I get a permanent residence permit ?
                a.There are several different bases for obtaining a permanent residence permit:<br></br>
                - having of any type of temporary residence permit for 10 years.This period does not include the period of residence in Georgia for study or treatment, as well as the period of work in diplomatic missions and missions equivalent to them.
                <br></br>
                - through an investment residence permit.
            </Typography>
        )
    }
];

export default function FAQ() {
    return (
        <>
            <Box
                sx={{
                    backgroundImage: 'url("https://cdn3.mageplaza.com/media/general/s0rJ5ss.jpg")',
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
                            <Grid item xs={8} key={idx}>
                                <Card sx={{ display: 'flex', boxShadow: 10, height: '100%' }}>
                                    <CardContent sx={{ flex: 1, position: 'relative' }}>
                                        <PsychologyAltIcon sx={{ fontSize: '2.5rem', position: 'absolute', bottom: 5, right: 5 }} />
                                        <Typography component="h2" variant="h4" align='center'>
                                            {s.title}
                                        </Typography>
                                        {s.desc()}
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
