export const progressModel = model => ({
  type: "PROGRESS_MODEL",
  payload: {
    model
  }
});

export const progressColor = color => ({
  type: "PROGRESS_COLOR",
  payload: {
    color
  }
})

export const progressType = type => ({
  type: "PROGRESS_TYPE",
  payload: {
    type
  }
})

export const progressTank = tank => ({
  type: "PROGRESS_TANK",
  payload: {
    tank
  }
})

export const progressNumber = number => ({
  type: "PROGRESS_NUMBER",
  payload: {
    number
  }
})

export const progressSum = () => ({
  type: "PROGRESS_SUM",
})
