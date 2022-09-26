import * as type from "../types";

const initialState = {
  cards: [],
  message: "",
  card: {},
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
        cards: action.payload,
      };
    }
    case type.GET_CARD_BY_ID_SUCCESS: {
      return {
        ...state,
        card: action.payload,
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
        cards: action.payload,
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
