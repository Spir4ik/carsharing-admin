export default function textForColorReducer(state = "", action) {
  return action.type === "ADD_TEXT_FOR_COLOR" ? action.payload.colorText : "";
}
