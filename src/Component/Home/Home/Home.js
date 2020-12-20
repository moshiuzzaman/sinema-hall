import { Container } from '@material-ui/core';
import React from 'react';
import MenuBar from '../Menubar/MenuBar';
import MovieList from '../MovieList/MovieList';
import './Home.css'

const Home = () => {
    return (
        <Container>
            <MenuBar/>
            <img className='home-benner' src="https://image.shutterstock.com/image-vector/cinema-banners-260nw-454172866.jpg" alt=""/>
            <MovieList/>
        </Container>
    );
};

export default Home;