export const addUser = (name, inviteCode) => ({
    type: "ADD_USER",
    payload: { name, inviteCode },
  });