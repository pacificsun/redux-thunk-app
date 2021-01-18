import * as actions from "../actions/postsActions";

export const initialState = {
  posts: [],
  loading: false,
  hasErrors: false,
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_POSTS:
      return {
        ...state,
        loading: true,
      };

    case actions.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    case actions.GET_POSTS_FAILURE:
      return {
        ...state,
        hasErrors: true,
        loading: false,
      };
    default:
      return state;
  }
}
