const Inputreducer = (state="",action)=>{
    if(action.type==="SET-INPUT"){
        return action.value
    }
    return state
}
export default Inputreducer