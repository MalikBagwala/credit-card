import { set } from "lodash-es";
const INITIAL_STATE = {};

export const CHANGE_FORM = "CHANGE_FORM";
export default function rootReducer(state = INITIAL_STATE, { payload, type }) {
  switch (type) {
    case CHANGE_FORM:
      const stateCopy = { ...state };
      set(stateCopy, payload.id, payload.value);
      return stateCopy;

    default:
      break;
  }
}
