
import axios from "axios";
import {
  FETCH_USERS_REQUESTED,
  FETCH_USERS_SUCCEEDED,
  FETCH_USERS_FAILED,
} from "./actionTypes";

export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUESTED });

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCEEDED,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILED,
  payload: error,
});

export const fetchUsers = () => {
  return function (dispatch){
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceolder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};
