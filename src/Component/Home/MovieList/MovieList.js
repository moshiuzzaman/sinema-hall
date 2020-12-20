import React, { useEffect, useState } from 'react';
import './MovieList.css'
import SingleMovieList from './SingleMovieList';
import { Container, Grid } from '@material-ui/core';

const MovieList = () => {
    const [allMovie, setAllMovie]=useState([])

    //this useEffect for get all movie list from database
    useEffect(() => {
        fetch(`https://rocky-spire-92708.herokuapp.com/allMovie`)
            .then(response => response.json())
            .then(data => {
                setAllMovie(data)
            })
    }, [])

    return (
        <Container>
            <h1>All MovieList</h1>
            <Grid container spacing={3}>
                {
                    allMovie.map(ml => <SingleMovieList key={ml._id} SingleMovie={ml} />)
                }
            </Grid>
        </Container>
    );
};

export default MovieList;