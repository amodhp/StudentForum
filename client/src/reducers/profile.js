import { GET_PROFILE, PROFILE_ERROR , CLEAR_PROFILE, GET_PROFILES} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],//fill this with the profiles
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_PROFILES:
      return{
         ...state,
         profiles:payload,
         loading:false
      }//fill the empty array with profiles from the server
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
        return{
            ...state,
            profile: null,
            loading:false
        }
    default:
      return state;
  }
}
