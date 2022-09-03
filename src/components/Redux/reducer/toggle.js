const initialState = false;

const toggleModalStatus = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_ANNOUNCEMENTS":
      return !state;
    default:
      return state;
  }
};

export default toggleModalStatus;
