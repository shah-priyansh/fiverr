import * as type from "../types";

const initialState = {
  notes: [],
  message: "",
  note: {},
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_CARD_SUCCESS: {
      return {
        ...state,
        message: action.payload,
      };
    }
    case type.GET_CARD_LIST: {
      return {
        ...state,
        notes: action.payload,
      };
    }
    case type.GET_CARD_BY_ID_SUCCESS: {
      return {
        ...state,
        note: action.payload,
      };
    }
    case type.REMOVE_CARD_SUCCESS: {
      return {
        ...state,
        message: action.payload,
      };
    }
    case type.UPDATE_CARD_BY_ID: {
      return {
        ...state,
        notes: action.payload,
      };
    }
    case type.REQUEST_ERROR: {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export { cardReducer };
