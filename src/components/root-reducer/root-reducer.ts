import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../../services/slices/auth-slice';
import ingredientsReducer from '../../services/slices/ingredient-slice';
import burgerReducer from '../../services/slices/burger-slice';
import feedReducer from '../../services/slices/feed-slice';

const rootReducer = combineReducers({
  auth: authReducer,
  ingredients: ingredientsReducer,
  burger: burgerReducer,
  feed: feedReducer
});

export default rootReducer;
