import filterCars from "../../api/filterCars";

export default function getFilterCars(page, id, category) {
  return dispatch => {
    dispatch(filterCarsStarter());
    filterCars(page, id, category)
      .then(res => dispatch(filterCarsSuccess(res.data, res.count)))
      .catch(error => dispatch(filterCarsFailure(error)))
  };
}

export const filterCarsSuccess = (cars, count) => ({
    type: 'FILTER_CARS_SUCCESS',
    payload: {
        cars,
        count
    }
  });
  
  export const filterCarsStarter = () => ({
    type: 'FILTER_CARS_STARTED',
  });
  
  export const filterCarsFailure = error => ({
    type: 'FILTER_CARS_FAILURE',
    payload: {
      error
    }
  });