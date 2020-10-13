import React from 'react'
import {connect} from 'react-redux'
const Main = (props) => {
    return ( <div>
{props.todo.map(el=>
    <li key={el.id} >{el.inputvalue}</li>
    )}
    </div> );
}
  
const mapStateToProps=(state)=>{
    return {
        todo:state.main
    }
}

export default connect(mapStateToProps,null) (Main);