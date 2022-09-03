const initialState = 0;

const noOfNotificationsHandler = (state = initialState, action) => {
  switch (action.type) {
    case "NO_OF_NOTIFICATIONS":
      return action.payload;
    default:
      return state;
  }
};

export default noOfNotificationsHandler;
