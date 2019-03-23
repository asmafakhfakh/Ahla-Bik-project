import {combineReducers} from 'redux'
import reducerguest from './reducerguest'
import experienceCommentReducer from './experiencesCommentsReducer'
import experiencesArticlesReducer from './experiencesArticlesReducer'

export default combineReducers({experienceCommentReducer,experiencesArticlesReducer})