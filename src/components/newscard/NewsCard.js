import React from 'react'
import {Grid, Grow, Typography} from '@material-ui/core'

import useStyles from './styles.js'
import NewsCards from '../newcard/NewsCards'

const infoCards = [
    {color: '#00838f', title: 'Latest New', text: 'Give me the latest news'},
    {color: '#1565c0', title: 'News by Categories',  info:'Business, Entertainment, Genral, Health, Science, Sports, Technology' },
    {color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation, Smartphone, Donald Trump...'},
    {color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News'}
]



const NewsCard = ({articles, activeArticle}) => {
    const classes = useStyles();

    if(!articles.length){
        return(
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={6} className={classes.infoCard}>
                            <div className={classes.card} style={{background: infoCard.color}}>
                                <Typography variant="h5">{infoCard.title}</Typography>
                                {
                                infoCard.info 
                                    ? (<Typography variant="h5">
                                        <strong>
                                            {infoCard.title.split(' ')[2]};
                                        </strong>
                                        <br />{infoCard.info}</Typography>) : null }
                                        <Typography variant="h6">Try Saying: <br /><i>{infoCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }


    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                        <NewsCards article={article} activeArticle={activeArticle} i={i}  />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}

export default NewsCard
