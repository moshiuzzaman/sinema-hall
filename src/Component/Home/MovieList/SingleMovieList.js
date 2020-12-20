import { Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleMovieList = ({ SingleMovie }) => {
    const { name, image, time, date, _id } = SingleMovie
    return (
        <Grid item md={4}>
            <Card >
                <Link to={`movieSeat/${_id}`}>
                    <CardActionArea >
                        <img className='movie_image' src={image} alt="" />
                        <CardContent>
                            <Typography className='movie-name' gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>

                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <p className='ml-2'><span className="date-time">Date:</span> {date}</p>
                    </Grid>
                    <Grid item md={6}>
                        <span className="date-time">Time:</span> {time}
                    </Grid>
                </Grid>
                <CardActions>
                    <Link className="single-movie" to={`movieSeat/${_id}`}>
                        <Button className="book-a-seat-button" size="small" color="primary">
                            Book A seat now
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>

    );
};

export default SingleMovieList;