const initialProgress = {
  progressModel: 0,
  progressColor: 0,
  progressType: 0,
  progressTank: 0,
  progressNumber: 0,
  sum: 0,
}

export default function progressReducer(state = initialProgress, action) {
  switch (action.type) {
    case "PROGRESS_MODEL":
      return {
        ...state,
        progressModel: action.payload.model
      };
    case "PROGRESS_COLOR":
      return {
        ...state,
        progressColor: action.payload.color
      };
    case "PROGRESS_TYPE":
      return {
        ...state,
        progressType: action.payload.type
      };
    case "PROGRESS_TANK":
      return {
        ...state,
        progressTank: action.payload.tank
      };
    case "PROGRESS_NUMBER":
      return {
        ...state,
        progressNumber: action.payload.number
      };
    case "PROGRESS_SUM":
      return {
        ...state,
        sum: state.progressModel + state.progressNumber + state.progressColor + state.progressTank + state.progressType
      }
    default:
      return state;
  }
}
