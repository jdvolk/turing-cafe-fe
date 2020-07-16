const url = "http://localhost:3001/api/v1/reservations"

export const getReservations = async () => {
  const response = await fetch(url);
  const reservations = await response.json();
  return reservations;  
}

export const postReservation = async (name, date, time, number) => {
  const response = await fetch(
    url, {
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },       "body": JSON.stringify({
        "name": name,
        "date": date,
        "time": time,
        "number": number
      })
    }
  )
  const newReservation = await response.json();
  return newReservation;
}

export const deleteReservation = async (id) => {
  const response = await fetch(
    `${url}/${id}`, {
      "method": "DELETE",
      "headers": {
        "content-type": "application/json"
      },
    }
  )
  return response.json();
}

// {name: <String>, date: <String>, time: <String>, number: <Number>}