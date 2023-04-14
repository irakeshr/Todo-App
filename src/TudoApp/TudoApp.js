import React, { Component } from "react";
import "./TudoApp.css";
class TudoApp extends Component {
    state={
        input:"",
        items:[]
    }
    onenter=(event)=>{
        this.setState({
            input:event.target.value
        });
    };

    storeitems=event=>{
        event.preventDefault();

        const{input}=this.state;
        
        this.setState({
            items:[...this.state.items,input ],
            input:""
        });

    };
    delclick=(index)=>{
        const{items}=this.state;
        items.splice(index,1);
        this.setState({
        items:[...this.state.items,]    
        })
    }
    edclick=()=>{

    }
  render() {
    const{ items}=this.state;
    // console.log(items);
    
    return (
      <div className="main-section" >
         
        
        <form className="insection" onSubmit={this.storeitems}>
            <h1>Dream Note</h1> 
        <input type="text" value={this.state.input} onChange={this.onenter} placeholder="Enter your note...."/>
        
        
        </form>
        <div className="list">
            <ul>
                {items.map((value,index)=>(
                    <li key={index} >
                         {value} 
                    <i className="fa-solid fa-trash" onClick={()=>this.delclick(index)}></i> 
                    <i className="fa-solid fa-pen-to-square" onClick={()=>this.edclick(index)}></i>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    )
  }
}
export default TudoApp;