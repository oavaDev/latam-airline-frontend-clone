import airbus from '../../Airbus';
import airbusTwo from '../../AirbusTwo';

export const REQ_FLIGHTS = '@flights/req-flights';
export const ADD_SEATS_DEPARTURE = '@flights/add-seat-departure';
export const ADD_SEATS_ARRIVAL = '@flights/add-seat-arrival';
export const DELETE_DEPARTURE_SEATS = '@flights/delete-departure-seat';
export const DELETE_ARRIVAL_SEATS = '@flights/delete-departure-seat';

const initialState = {
  price: {
    light: '124.090,00',
    basic: '233.090,00',
    plus: '533.090,00',
  },
  departureFlightData: {
    airplane: {
      plate: 'A543',
      airBus: 319,
      seats: {
        firstDiv: airbus.firstDiv,
        secondDiv: airbus.secondDiv,
        thirthDiv: airbus.thirthDiv,
        headerSeats: airbus.headerSeats,
      },
    },
  },
  arrivalFlightData: {
    airplane: {
      plate: 'A333',
      airBus: 320,
      seats: {
        firstDiv: airbusTwo.firstDiv,
        secondDiv: airbusTwo.secondDiv,
        thirthDiv: airbusTwo.thirthDiv,
        headerSeats: airbusTwo.headerSeats,
      },
    },
  },
  departureUser: [],
  arrivalUser: [],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQ_FLIGHTS:
      return {
        ...state,
        departureFlightData: {
          ...state.departureFlightData,
          departureFlightData: action.payload.departure,
        },
        arrivalFlightData: {
          ...state.arrivalFlightData,
          arrivalFlightData: action.payload.arrival,
        },
      };
    case ADD_SEATS_DEPARTURE:
      state.departureUser.push(action.payload);
      return state;
    case ADD_SEATS_ARRIVAL:
      state.arrivalUser.push(action.payload);
      return state;
    case DELETE_DEPARTURE_SEATS:
      return {
        ...state,
        departureUser: {
          ...state.departureUser,
          departureUser: state.departureUser.filter(item => {
            return (
              (item.row && item.column) !==
              (action.payload.row && action.payload.column)
            );
          }),
        },
      };
    case DELETE_ARRIVAL_SEATS:
      return {
        ...state,
        arrivalUser: {
          ...state.arrivalUser,
          arrivalUser: state.arrivalUser.filter(item => {
            return (
              (item.row && item.column) !==
              (action.payload.row && action.payload.column)
            );
          }),
        },
      };
    default:
      return state;
  }
};

export default flightsReducer;