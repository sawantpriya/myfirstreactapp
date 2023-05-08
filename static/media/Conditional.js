import React, { Component } from 'react';

export class ConditionalComponent extends Component{

    render(){
        
        const userid=this.props.userid;
        //approach 1
        /* 
        if(userid==="gitika"){
        return(
            <div>
                 <h1>{userid}</h1> 
            </div>
        )}
        else{
            return(
                <div><i>Invalid Credentials</i></div>
            )
        } */
        //approach 2
        return(
            <div>
                {userid==="gitika"?<h1>{userid}</h1>: <div><i>Invalid Credentials</i></div>}
            </div>
        )
    }
}