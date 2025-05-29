import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../slices/auth-slice';
import ingredientsReducer from '../slices/ingredient-slice';
import burgerReducer from '../slices/burger-slice';
import feedReducer from '../slices/feed-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  ingredients: ingredientsReducer,
  burger: burgerReducer,
  feed: feedReducer
});

export default rootReducer;
