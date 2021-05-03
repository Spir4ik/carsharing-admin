export const addName = (name) => ({
  type: 'ADD_NAME',
  payload: {
    name
  }
})

export const addThumbnail = (thumbnail) => ({
  type: 'ADD_THUMBNAIL',
  payload: {
    thumbnail
  }
})

export const addDescription = (description) => ({
  type: 'ADD_DESCRIPTION',
  payload: {
    description
  }
})

export const addCategoryId = (categoryId) => ({
  type: 'ADD_CATEGORY',
  payload: {
    categoryId
  }
})

export const addColor = (...color) => ({
  type: 'ADD_COLOR',
  payload: {
    color
  }
})

export const addPriceMin = (priceMin) => ({
  type: 'ADD_PRICE_MIN',
  payload: {
    priceMin
  }
})

export const addPriceMax = (priceMax) => ({
  type: 'ADD_PRICE_MAX',
  payload: {
    priceMax
  }
})


