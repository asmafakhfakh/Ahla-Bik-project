import {combineReducers} from 'redux'
import reducerguest from './reducerguest'
import experienceCommentReducer from './experiencesCommentsReducer'
import experiencesArticlesReducer from './experiencesArticlesReducer'
import hostsReducer from './hostsreducer'

export default combineReducers({experienceCommentReducer,experiencesArticlesReducer,hostsReducer})