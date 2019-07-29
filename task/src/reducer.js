export const reducer = (state={}, action) => {
  // currently only handles on action
  return ({slideToStart: action.slideToStart, direction: action.direction})
}
