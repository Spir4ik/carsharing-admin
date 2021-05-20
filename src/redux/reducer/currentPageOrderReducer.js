export default function currentPageOrderReducer(state = 1, action) {
  return action.type === "CURRENT_PAGE_ORDER" ? action.payload.currentPage : state;
}
