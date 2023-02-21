import { Dispatch } from "redux";

export const GET_ALL_PROFILES = "GET_ALL_PROFILES";
export const GET_MY_PROFILE = "GET_MY_PROFILE";

export const fetchAllProfilesAction = () => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzOTBhMDgzODFmYzAwMTNmZmZhZTEiLCJpYXQiOjE2NzY5MDY2NTYsImV4cCI6MTY3ODExNjI1Nn0.dS-mJz9dPZvOvHRQqPy2I6yqTVHPW3mZ-MKpxfhxw8I",
          },
        }
      );

      if (response.ok) {
        let profiles = await response.json();
        dispatch({
          type: GET_ALL_PROFILES,
          payload: profiles,
        });
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchMyProfileAction = () => {
  return async (dispatch: Dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzZmU0NTExZDczZDAwMTM3YWFhZGUiLCJpYXQiOjE2NzY5MzQ3MjUsImV4cCI6MTY3ODE0NDMyNX0.OlrbIxHrNB0R7dnd4jirS2aUw3YiiJvvDWw2W_1I2f4",
          },
        }
      );

      if (response.ok) {
        let myProfile = await response.json();
        dispatch({
          type: GET_MY_PROFILE,
          payload: myProfile,
        });
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};