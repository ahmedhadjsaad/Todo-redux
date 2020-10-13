import React from 'react'
import {connect} from 'react-redux'
const Input = (props) => {
    return ( <div>
        <input type="text" onChange={(e)=>{props.Handlechange(e.target.value)}}/>
        <button onClick={()=>{this.props.ADD(props.input)}}>Add</button>
    </div> );
}
const mapDispatchToProps=(dispatch)=>{
    return {
        Handlechange:(target)=>{
            dispatch({type:'SET-INPUT',value:target.value})
        },
        ADD :(input)=>{
            let obj = {}
            let inputvalue=input
            let id=Math.floor(Math.random()*1000)
            obj ={inputvalue,id}
            dispatch({type:'ADD',value:obj})
        }
    }

}
const mapStateToProps=(state)=>{
    return {
        input: state.input
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Input);