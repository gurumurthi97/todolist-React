import React,{Component} from 'react'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import InputList from './components/InputList';
import List from './components/List'
class  App extends Component {
  constructor(){
    super();
    this.state={
      items:['Go','React','JavaScript']
      
    }
  }
  addItem(newItem){
    this.setState({
      items:[...this.state.items,newItem]
    })
  }
  render(){
  return (
    <div className="App">
      <Header/>
      <InputList addItem={this.addItem.bind(this)}/>
     <List items={this.state.items}/>
      <Footer/>
    </div>
  );
}
}
export default App;
