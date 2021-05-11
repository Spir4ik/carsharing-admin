const initialErrors = {
  inputModel: {text: "Введите модель автомобиля", state: false},
  inputColor: {text: "Добавьте цвет", state: false},
  inputTank: {text: "Введите уровень топлива", state: false},
  inputNumber: {text: "Введите номер автомобиля", state: false},
  inputPrice: {text: "Минимальная цена больше максимальной", state: false},
  inputSelect: {text: "Выберите тип автомобиля", state: false},
}

export default function errorsReducer(state = initialErrors, action) {
  switch (action.type) {
    case "ERROR_MODEL":
      return {
        ...state,
        inputModel: {
          text: state.inputModel.text,
          state: action.payload.state
        }
      };
    case "ERROR_COLOR":
      return {
        ...state,
        inputColor: {
          text: state.inputColor.text,
          state: action.payload.state
        }
      };
    case "ERROR_TANK":
      return {
        ...state,
        inputTank: {
          text: state.inputTank.text,
          state: action.payload.state
        }
      };
    case "ERROR_NUMBER":
      return {
        ...state,
        inputNumber: {
          text: state.inputNumber.text,
          state: action.payload.state
        }
      };
    case "ERROR_PRICE":
      return {
        ...state,
        inputPrice: {
          text: state.inputPrice.text,
          state: action.payload.state
        }
      };
    case "ERROR_SELECT":
      return {
        ...state,
        inputSelect: {
          text: state.inputSelect.text,
          state: action.payload.state
        }
      };
    default:
      return state;
  }
}
