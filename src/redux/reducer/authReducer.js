const initialAuth = {
  username: '',
  password: ''
}

export default function authReducer(state = initialAuth, action) {
  switch (action.type) {
    case 'ADD_EMAIL':
      return {
        ...state,
        username: action.payload.username
      };
    case 'ADD_PASSWORD':
      return {
        ...state,
        password: action.payload.password
      };
    default:
      return state;
  }
}
