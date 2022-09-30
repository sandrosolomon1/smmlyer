import * as React from 'react';
import Typography from '@mui/material/Typography';
import './test.css';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export const servicesList = [
    { title: 'IE + SBS Registration', href: 'registration', desc: 'If you are willing to start a successful freelance business, where you are a sole proprietor with small business status, your choice should definitely be Georgia, where you can enjoy incredible tax benefits. If the annual turnover of your business is less than 500,000 GEL (approx.165,000 US dollars), you will have the opportunity to obtain the status of a small business, the tax rate will be only 1%. If your income is from clients (B2B; B2C) based in any foreign country, your income will not be VATable in Georgia.' },
    { title: 'Set Up a Legal Entity', href: 'entity', desc: 'In Georgia there are several different types of legal entities and among them LLC (Limited Liability Company) is the most popular one. Georgia is on 7th place in world ranking among 190 countries in easy of doing business. In order to register LLC in Georgia, initial capital is not required. The liability of this legal entity to creditors is limited only to property. Partners (founders) are not responsible for the obligations of the company, which in turn is associated with lower risks. LLC can be founded by one or more persons. Tax rates: 15% profit tax; 5% tax on dividend; 18 %VAT (if applicable). The profit of the company is not taxed until it is distributed among the shareholders. Some IT sector LLCs may qualify for a virtual zone with incredible tax benefits.' },
    { title: 'Legal Residency', href: 'residency', desc: 'If you would like to stay in Georgia for a long time period and you want to become as native as it is possible, Georgian residence permit will help you. There are various options of a residence permit in Georgia and all of them have their own different obtaining basis and certain benefits. As soon as you are granted a Georgian residence permit, you and your family members will be able to obtain the permit as well, under your sponsorship.' },
    { title: 'Real Estate', href: 'estate', desc: 'Acquiring property or investing in real estate is a serious decision that requires due diligence. Decision to the acquire property must be legally correct to make a deal, to observe all the necessary legal procedures. It is necessary to double check all legal defects, which the property may have and proper procedure for a comprehensive inspection of the property before buying it. Buying real estate is a difficult and risky business if you do not have a legal education or do not buy real estate from people you can trust. To protect yourself from unscrupulous sellers, use the service supporting real estate transactions in Georgia.' },
    { title: 'Relocation Package', href: 'relocation', desc: 'Acquiring property or investing in real estate is a serious decision that requires due diligence. Decision to the acquire property must be legally correct to make a deal, to observe all the necessary legal procedures. It is necessary to double check all legal defects, which the property may have and proper procedure for a comprehensive inspection of the property before buying it. Buying real estate is a difficult and risky business if you do not have a legal education or do not buy real estate from people you can trust. To protect yourself from unscrupulous sellers, use the service supporting real estate transactions in Georgia.' },
    { title: 'Other Services', href: 'other', desc: 'In addition, we provide accounting services, which means maintaining the taxpayers personal account, drawing up declarations and all kinds of consultations; mediation in notarial activities and translation services in accordance with international standards; representing in relationship with governmental bodies.' },
];

export default function Services() {
    return (
        <>
            <div className='grid'>
                {servicesList.map((s, idx) => (
                    <div key={idx} className={`item${idx}`} style={{
                        marginTop: idx === 2 ? '-12rem' : 0 || idx === 4 ? '-22rem' : 0
                    }}>
                        <CardActionArea component="a" href={s.href}>
                            <Card sx={{ display: 'flex', boxShadow: 10 }}>
                                <CardContent sx={{ flex: 1 }}>
                                    <Typography component="h2" variant="h5">
                                        {s.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary">
                                        <CheckCircleOutlineIcon fontSize='1' />
                                    </Typography>
                                    <Typography variant="subtitle1" paragraph>
                                        {s.desc}
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary">
                                        Continue reading...
                                    </Typography>
                                </CardContent>
                                <CardMedia
                                    component="img"
                                    sx={{ width: '40%', display: { xs: 'none', sm: 'block' } }}
                                    image='https://source.unsplash.com/random'
                                    alt='alt'
                                />
                            </Card>
                        </CardActionArea>
                    </div>
                ))}
            </div>
        </>
    )
}
