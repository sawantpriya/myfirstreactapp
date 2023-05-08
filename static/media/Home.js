import React from "react";

export class Home extends React.Component{
    title="Home Page";
    state={
        name:'Gitika',
        age:35
    }
    showDetails(e){
        console.log("Event called by "+e.target);

    }
    updateAge=(e)=>{
        //this.state.age=45;
        this.setState({
            age:45
        });
        console.log("Age updated");
    }
    render(){
        return(
            <div className="container">
                <h1>Home Component</h1>
                {2+2}
                {this.title}
                {this.state.name}
                {this.state.age}

                <button onClick={this.showDetails}>Click here to change the age</button>
                <button onClick={this.updateAge}>Click here to change the age</button>
            </div>
        );
    }
}