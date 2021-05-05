import Category from '../../api/Category';
import {
  getCategoryStarted,
  getCategoryFailed,
  getCategorySuccess
} from '../actions/thunkActions/categoryThunk';

export default function getCars() {
  return dispatch => {
    dispatch(getCategoryStarted());
    Category()
      .then(res => dispatch(getCategorySuccess(res)))
      .catch(error => dispatch(getCategoryFailed(error)));
  };
}
