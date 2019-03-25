import {combineReducers} from 'redux'
import reducerguest from './reducerguest'
import experienceCommentReducer from './experiencesCommentsReducer'
import experiencesArticlesReducer from './experiencesArticlesReducer'
import searchReducer from './searchReducer'

export default combineReducers({experienceCommentReducer,experiencesArticlesReducer,searchReducer})