import React from 'react';
import {makeStyles, Card, Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
const useStyles = makeStyles({ root: { maxWidth: 345 }});

const News = (props) => {
    const {title, description, urlToImage} = props.article;
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia component="img" alt="Contemplative Reptile" height="140" image={urlToImage} title="Contemplative Reptile"/><CardContent>
                    <Typography gutterBottom variant="h5" component="h2"> {title}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" size="small" color="primary">Share </Button>
                    <Button variant="contained" size="small" color="primary"> Learn More </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default News;