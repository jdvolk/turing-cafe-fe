import React, { Component } from "react";
import "./ReservationForm.css";
import {postReservation} from "../apiCalls"

class ReservationForm extends Component  {
  constructor(props) {
    super(props);
    this.state ={
      name: '',
      date: '',
      time: '',
      numOfGuests: 0,
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newRes = {
      "date": this.state.date,
      "id": Date.now(),
      "name": this.state.name,
      "number": parseInt(this.state.numOfGuests),
      "time": this.state.time,
    }
    postReservation(this.state.name, this.state.date, this.state.time, this.state.number);
    this.props.allReservations.push(newRes);
    this.props.addReservation(this.props.allReservations)


  }

  postReservation = async () => {
    try {
      const response = await postReservation(this.state.name, this.state.date, this.state.time, this.state.numOfGuests)

    } catch (e) {
      this.setState({error: e})
    }
  }

  render() {
    return(
      <section className="ReservationForm">
        <form onSubmit={ this.handleSubmit} className="reservation-form">
            <input
              className="name-input input"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            ></input>
            <input
              className="date-input input"
              placeholder="Date (mm/dd)"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            ></input>
            <input
              className="time-input input"
              placeholder="Time"
              name="time"
              value={this.state.time}
              onChange={this.handleChange}
            ></input>
            <input
              className="num-guests-input input"
              placeholder="Number of guests"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
          <button
            className="res-btn button"
            type="submit"
            onClick={ this.handleSubmit }
          >
            Make Reservation
          </button>
        </form>
    </section>
    );
  }
}

export default ReservationForm