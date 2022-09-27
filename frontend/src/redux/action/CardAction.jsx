import * as type from "../types";
import axios from "axios";

const url = "https://fiverr-learning.herokuapp.com";

export const createCard = (noteInfo) => {
  return async (dispatch) => {
    return await axios
      .post(`${url}/create-card`, noteInfo)
      .then(({ data }) => {
        return dispatch({
          type: type.CREATE_CARD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        return dispatch({
          type: type.REQUEST_ERROR,
          payload: e.response,
        });
      });
  };
};

export const getCardData = () => {
  return async (dispatch) => {
    return await axios
      .get(`${url}/get-cards`)
      .then(({ data }) => {
        return dispatch({
          type: type.GET_CARD_LIST,
          payload: data,
        });
      })
      .catch((e) => {
        return dispatch({
          type: type.REQUEST_ERROR,
          payload: e.response,
        });
      });
  };
};

export const getCardById = (_id) => {
  return async (dispatch) => {
    return await axios
      .get(`${url}/get-cardbyId/${_id}`)
      .then(({ data }) => {
        return dispatch({
          type: type.GET_CARD_BY_ID_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        return dispatch({
          type: type.REQUEST_ERROR,
          payload: e.response,
        });
      });
  };
};

export const editCard = (id, noteInfo) => {
  return async (dispatch) => {
    return await axios
      .post(`${url}/update-card/${id}`, noteInfo)
      .then(({ data }) => {
        return dispatch({
          type: type.UPDATE_CARD_BY_ID,
          payload: data,
        });
      })
      .catch((e) => {
        return dispatch({
          type: type.REQUEST_ERROR,
          payload: e.response,
        });
      });
  };
};

export const removeCard = (_id) => {
  return async (dispatch) => {
    return await axios
      .delete(`${url}/delete-card/${_id}`)
      .then(({ data }) => {
        return dispatch({
          type: type.REMOVE_CARD_SUCCESS,
          payload: data,
        });
      })
      .catch((e) => {
        return dispatch({
          type: type.REQUEST_ERROR,
          payload: e.response,
        });
      });
  };
};
