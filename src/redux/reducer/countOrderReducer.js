export default function countOrderReducer(state = 0, action) {
  return action.type === "CURRENT_COUNT" ? action.payload.currentCount : state;
}
