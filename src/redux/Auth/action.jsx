// action types
export const LOGIN_TOGGLE = "LOGIN_TOGGLE";
export const USERDETAILS = "USERDETAILS"
// Action Creators
export const userdetails = (data) => {
   return {
      type: USERDETAILS,
      payload: data
   }
}
export const login = (boolean) => {
   return {
      type: LOGIN_TOGGLE,
      payload: boolean,
   };
};
