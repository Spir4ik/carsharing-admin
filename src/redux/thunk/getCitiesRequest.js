import getCities from '../../api/getCities'

export default function getCitiesRequest() {
  return dispatch => {
    dispatch(getCitiesStarted());
    getCities()
      .then(res => dispatch(getCitiesSuccess(res)))
      .catch(error => dispatch(getCitiesFailed(error)));
  };
}

const getCitiesSuccess = cities => ({
  type: 'GET_CITIES_SUCCESS',
  payload: {
    cities
  }
});

const getCitiesStarted = () => ({
  type: 'GET_CITIES_STARTED',
});

const getCitiesFailed = error => ({
  type: 'GET_CITIES_FAILURE',
  payload: {
    error
  }
});
