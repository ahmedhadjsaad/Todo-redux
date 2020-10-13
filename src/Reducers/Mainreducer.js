const Mainreducer = (state=[],action)=>{
    if(action.type==="ADD"){
        return state=[...state,action.value]
    }
    if(action.type==="REMOVE"){
        return state.filter(el=>el.id!==action.id)
    }
    return state
}
export default Mainreducer