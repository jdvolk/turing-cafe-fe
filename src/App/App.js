import React, { Component } from 'react';
import './App.css';
import ReservationContainer from "../ReservationContainer/ReservationContainer";
import { getReservations, postReservation, deleteReservation} from "../apiCalls";

class App extends Component {
  constructor(){
    super();
    this.state = {
      allReservations: [],
      error: null
    }
  }
  
  componentDidMount = async () => {
    try {
      const reservations = await getReservations();
      await this.setState({ ...this.state, allReservations: reservations });
    } catch (error) {
      this.setState({ error: error });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ReservationContainer 
            allReservations={this.state.allReservations}
          />
        </div>
      </div>
    )
  }
}

export default App;
