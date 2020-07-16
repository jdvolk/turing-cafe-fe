import React, { Component } from "react";
import "./ReservationContainer.css";
import ReservationCard from "../ReservationCard/ReservationCard";


class ReservationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeHolder: null;
    }

  }
  render() {
    const reservationCards = this.props.allReservations.map((reservation) => {
      return(
        <ReservationCard
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          numOfGuests={reservation.number}
          cancelReservation={}
          />
      )
    });
  }
}