import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdEventSeat } from 'react-icons/md';
import { Container, Grid } from '@material-ui/core';
import './MovieSeat.css'
import { Modal } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import MenuBar from '../Menubar/MenuBar';

const MoveiSeats = () => {

    const [allMovie, setAllMovie] = useState([])
    //this useEffect for get all movie list from database because it's needed for filter  exact selected Movie
    useEffect(() => {
        fetch(`https://rocky-spire-92708.herokuapp.com/allMovie`)
            .then(response => response.json())
            .then(data => setAllMovie(data))
    }, [])

    const { id } = useParams()
    const exactMovie = allMovie.find(ml => ml._id === id)


    const alradyBookHandeler = (seatNo) => {
        alert(` seat no ${seatNo} alrady booked , Please choose green color seat`)
    }

    const [bookingModel, setBookingModel] = useState(false);
    const [selectedSit, setSelectedSit] = useState(0)

    //this function for Open booking model    
    const bookingModelHandeler = (seatNo) => {
        setSelectedSit(seatNo)
        setBookingModel(true);
    }

    //this function for book a seat for exactMovie
    const seatBookingHandeler = (id) => {
        const seats = exactMovie.seat
        seats[selectedSit - 1] = "booked"
        const allSeat = [...seats]
        fetch(`https://rocky-spire-92708.herokuapp.com/bookSeat/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({ allSeat }),
            headers: { "Content-Type": "application/json" }
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Thanks for booking the seat')
                    setBookingModel(false);
                }

            })

    }
    //this veriable for check housefull or not
    let allbooked
    allbooked = exactMovie !== undefined && exactMovie.seat.find(ms => ms === 'available')

    return (
        <Container >
            <MenuBar />

            {/* Housfull model */}
            {
                allbooked !== "available" && <Modal
                    className="d-flex align-items-center justify-content-center"
                    open={true}
                >
                    <div className="Houseful_Model d-flex align-items-center justify-content-center">
                        <div>
                            <h4 id="transition-modal-title"> House Full</h4>
                            <Link to="/"><Button>Back Home</Button></Link>
                        </div>
                    </div>
                </Modal>
            }

            {/* All seats for selected movie */}
            {
                exactMovie === undefined ? <p>Loding .....</p> : <>
                    <div className="bookSeatPageHeader d-flex align-items-center justify-content-center mb-5">
                        <div align="center">
                            <h1 className="selected_movie_name">{exactMovie.name}</h1>
                            <p className="selected_movie_date">Date: {exactMovie.date}</p>
                            <p className="selected_movie_time">Time: {exactMovie.time}</p>
                        </div>
                    </div>

                    <Grid align="center" container spacing={3}>
                        {
                            exactMovie.seat.map((ms, index) =>
                                <Grid key={index} item md={2}>
                                    {
                                        ms === "available" ? <div>
                                            <MdEventSeat
                                                className="available-seat movie_Seat"
                                                onClick={() => bookingModelHandeler(index + 1)}
                                                color="green"
                                            />
                                            <p>Seat number {index + 1}</p>
                                        </div>
                                            :
                                            <div>
                                                <MdEventSeat
                                                    className="booked-seat movie_Seat"
                                                    onClick={() => alradyBookHandeler(index + 1)}
                                                    color="#b8b8b8"
                                                />
                                                <p>Seat number {index + 1}</p>
                                            </div>

                                    }

                                </Grid>
                            )
                        }

                        {/* This model for booking a seat */}
                        <Modal
                            className="d-flex align-items-center justify-content-center"
                            open={bookingModel}
                            onClose={() => setBookingModel(false)}
                        >
                            <div className="sitBooking_Model d-flex align-items-center justify-content-center">
                                <div align="center">
                                    <h4 id="transition-modal-title"> Movie Name :{exactMovie.name}</h4>
                                    <p className="selected_movie_date"><span className="date-time">Date: </span>{exactMovie.date}  <span className="date-time">Time: </span> {exactMovie.time}</p>
                                    
                                    <p id="transition-modal-description">You are selected Seat no {selectedSit}</p>
                                    <Button onClick={() => seatBookingHandeler(id)}>Book Now</Button>
                                </div>
                            </div>
                        </Modal>
                    </Grid>
                </>
            }
        </Container>
    );
};

export default MoveiSeats;