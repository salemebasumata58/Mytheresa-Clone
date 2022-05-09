import { LOGIN_TOGGLE, USERDETAILS } from "./action";

const init = {
   userdetails: {
      email: "",
      firstName: "",
      lastName: "",
      token: "",
   },

   isLoggedin: false,
};

export const Authreducer = (store = init, { type, payload }) => {
   switch (type) {
      case LOGIN_TOGGLE:
         return {
            ...store,

            isLoggedin: payload,
         };
      case USERDETAILS:
         return {
            ...store,
            userdetails: payload
         }
      default:
         return store;
   }
};
