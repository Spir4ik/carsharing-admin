export default function alertReducer(state = false, action) {
  return action.type === "SHOW_ALERT" ? !state : state;
}
