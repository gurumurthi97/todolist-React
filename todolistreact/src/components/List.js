import React,{Component} from 'react';
class List extends Component{
    constructor(props){
        super();
        
    }
    render(){
        return(
            <div>
                <ul>
                  {
                    this.props.items.map(element => {
                        return (<li>{element}</li>)
                    })
                  }
                                  </ul>
                </div>
        )
    }
}
export default List;