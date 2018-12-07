import colors from "../config/colors";

// Action Types
export const CHANGE_PRIMARY_COLOR = "CHANGE_PRIMARY_COLOR";

// Actions
export const changePrimaryColor = color => ({
  type: CHANGE_PRIMARY_COLOR,
  color
});

// Reducer
const initialState = {
  primaryColor: colors.primaryBlue
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return { ...state, primaryColor: action.color };
    default:
      return state;
  }
};
