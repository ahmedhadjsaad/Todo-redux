import {createStore,combineReducers} from 'redux'
import Inputreducer from './Reducers/Inputreducer'
import Mainreducer from './Reducers/Mainreducer'
const store = createStore(combineReducers({
    input : Inputreducer,
    main : Mainreducer
}))
export default store