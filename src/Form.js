import React,{Component} from 'react';
export class FormDemo1 extends Component{
    state={
        name:""
    }
    
    setName=(event)=>{
        this.setState({
            name:event.target.form.txtName.value
        });
    }
    updateName=(event)=>{
        this.setState({
            name:event.target.form.txtName.value
        });
    }
    submitName=(event)=>{
        event.preventDefault();
        console.log("form submitted with name", this.state.name);
    }
    render(){
        return(
            <div className="container">
            <form onSubmit={this.submitName}>
            <div className="form-group">
                <label>Enter your name</label>
                <input type="text" id="txtName" name="txtName" className="form-control" onChange={this.setName}></input>
            </div>
            <div className="form-group">
                <input type="button" value="Update Name" className="form-control,btn btn-success" onClick={this.updateName}></input>
            </div>
            <div className="form-group">
                <input type="submit" value="Update Name- Submit" className="form-control,btn btn-success" ></input>
            </div>
            <div>
                <p>Username :{this.state.name}</p>
            </div>
            </form>
            </div>
        )
    }

}