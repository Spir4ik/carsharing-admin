export const addEmail = username => ({
  type: 'ADD_EMAIL',
  payload: {
    username
  }
})

export const addPassword = password => ({
  type: 'ADD_PASSWORD',
  payload: {
    password
  }
})
