import {combineReducers} from 'redux'
import experienceCommentReducer from './experiencesCommentsReducer'
import experiencesArticlesReducer from './experiencesArticlesReducer'
import searchReducer from './searchReducer'
import { authentication } from '../components/authentication/_reducers/authentication.reducer';
import { registration } from '../components/authentication/_reducers/registration.reducer';
import { users } from '../components/authentication/_reducers/users.reducer';
import { alert } from '../components/authentication/_reducers/alert.reducer';
import addemailReducer from '../reducers/addemailReducer'

export default combineReducers({experienceCommentReducer,
                                experiencesArticlesReducer,
                                searchReducer ,
                                authentication,
                                registration,
                                users,
                                alert,
                                addemailReducer,
                            })




