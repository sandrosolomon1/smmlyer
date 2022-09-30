import * as React from 'react';
import Grid from '@mui/material/Grid'; // Grid version 1
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';

const clients = [
    { name: 'Roman', rating: 4, desc: '"The task was to open a company, bank accounts to it + accounting. They coped perfectly. Very responsible employees. They were accompanying me every step of the way. We completed the work even more than agreed. Namely: they did (free of charge) express registration, because I was in a rush; they also helped me to translate some documents and told how to keep monthly accounting declarations and much more. Great attitude. Now I recommend them to everyone."' },
    { name: 'Julia', rating: 3, desc: '"We wanted to open IT company in Georgia, with 4 partners, trough the Power of Attorney. We did everything super quickly and the process was very clear. Now they are doing our legal and accounting services regularly and we feel that our business is in safe hands.  Also, compare to other similar companies the price was quite acceptable."' },
    { name: 'Eduard', rating: 5, desc: '"Thanks to Saba for his help! At absolutely every step of the procedure, he accompanied me and helped me figure it out. I am very glad that I decided to contact his company."' },
    { name: 'Ivan', rating: 4.5, desc: '"I found Mr. Megeneishvili is smart to help me to resolve my problems. Also, he saved much more time because every process step we did Mr. Saba knows well. I reached all my goals and thanks to Mr. Saba!"' },
    { name: 'Cristiano', rating: 3.5, desc: '"I have opened small cafe in Tbilisi, and those wonderfull guys helped me to handle the whole pre-opening procedure."' },
    { name: 'Mr.Douchbag', rating: 2, desc: '"With the help of their lawyer, we carried out a real estate transaction, I was satisfied with the work. The case was non-standard, but everything went perfectly, the consultation was clear and complete."' },
]

export default function CustomerFeed() {
    return (
        <>
            <Grid container columns={{ sm: 8, md: 24 }}>
                {(clients.map(c => (
                    <Grid xs={8} sx={{ mb: '2rem' }}>
                        <Card sx={{ maxWidth: 345, boxShadow: 10 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2fGY3-MFnfaNajmgLcpaCJRL7opC18RvtvA&usqp=CAU"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {c.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {c.desc}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Typography component="legend">Raiting</Typography>
                                <Rating name="read-only" value={c.rating} readOnly />
                            </CardActions>
                        </Card>
                    </Grid>
                )))}
            </Grid>
        </>
    )
}