import React,{Component} from "react";
import './InputList.css'
 class InputList extends Component{
  constructor(props){
    super();
    this.state={
      newTask:''
    }
  }
    render(props){
    return(
       <div>
       <input placeholder="Enter a Text..." className="Input" value={this.state.newTask}
       onChange={(e)=>
        this.setState({newTask:e.target.value})
}/>
       <button className="Btn"onClick={()=>{this.props.addItem(this.state.newTask)}} >Add Task</button>
       <div>
          <ul>
            {/* <li>{arr[0]}</li>
            <li>{arr[1]}</li>
            <li>{arr[2]}</li>   */}
         
          </ul>
        </div>
       </div>
       
    
    
              )
        }  
} 
export default InputList