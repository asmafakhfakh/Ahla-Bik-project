import {combineReducers} from 'redux'
import experienceCommentReducer from './experiencesCommentsReducer'
import experiencesArticlesReducer from './experiencesArticlesReducer'
import searchReducer from './searchReducer'

export default combineReducers({experienceCommentReducer,experiencesArticlesReducer,searchReducer})