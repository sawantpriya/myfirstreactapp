import React,{Component} from 'react';

export class Form1 extends Component{
    constructor(props){
        super(props);
        this.cities = ['bangalore', 'chennai', 'pune', 'hyderabad', 'mumbai'];
        this.state = {
            uname:"unknown",
            city:"bangalore"
        }
    }
    changeHandler = e => this.setState({uname: e.target.value})
    cityHandler = e => this.setState({city: e.target.value})
    registterUser = e => {
                        e.preventDefault();
                         console.log(this.state)
    }
    render(){
        return(
            <form>
                Name : <input type="text" 
                                onChange={this.changeHandler}
                                value={this.state.uname}/><br/>
                City : <select value={this.state.city}
                                onChange={this.cityHandler}>
                            {
                                this.cities.map((city,index)=>
                                    <option key={index}>{city}</option>
                                )}
                        </select> <br/>
                <input className="btn btn-primary" 
                            onClick={this.registterUser}
                        type="submit" value="Submit"/>
            </form>
        );
    }
}