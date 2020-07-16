import React, { Component } from 'react';
import "./ReservationCard.css"

class ReservationCard extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <section className="reservationCard">
        <h3>{this.props.name}</h3>
        <p>{this.props.date}</p>
        <p>{this.props.time} pm</p>
        <p>Number of guests:{this.props.numOfGuests}</p>
        <button 
          class="cancel-res button" 
          type="button"
          onClick={this.props.cancelRes}
        >Cancel</button>
      </section>
    )
  }
}
export default ReservationCard;