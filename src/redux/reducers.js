
// List of valid invite codes for priority placement
const VALID_CODES = ["austin234", "alvin145", "karthik321"];

// Initial state for the waitlist
const initialState = [];

// Waitlist reducer
const waitlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const { name, inviteCode } = action.payload;
      const isPriority = VALID_CODES.includes(inviteCode);
      const newUser = { name, inviteCode, isPriority };

      const priorityUsers = state.filter(user => user.isPriority);
      const generalUsers = state.filter(user => !user.isPriority);

      return isPriority
        ? [...priorityUsers, newUser, ...generalUsers]
        : [...priorityUsers, ...generalUsers, newUser];

    default:
      return state;
  }
};

export default waitlistReducer;