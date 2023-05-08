import React,{Component} from 'react';
// Functional Component
export const EmpForm=(props)=>{

    
    const empList= [{"id":"123", "ename":"abc", "ejob":"developer"}];
    const eList=empList.map(emp=>{
        return(                                              
        <tr key={emp.id}>
            <td>{emp.ename}</td>
            <td>{emp.ejob}</td>
        </tr>)
        
        });
    return(
    /* <div className="container">
        <div className="row">
            <div className="col">EmpName</div>
            <div className="col">{this.props.ename}</div>
        </div>
        <div className="row">
            <div className="col">EmpJobRole</div>
            <div className="col">{this.props.ejob}</div>
        </div>
    </div> */
    <div className="container">
            <div className="row">
            <div className="col">EmpList</div>
            <div className="col">
                            <table>
                            <tr>
                                <td>Ename</td>
                                <td>Ejob</td>
                            </tr>
                            {eList}

                            </table>
            </div>
        </div>
    </div>
    );
}

/* export class EmpForm extends Component{
   
    
    render(){
        const {ename,ejob} = this.props;
        const empList=this.props.empList;
        const eList=empList.map(emp=>{
            return(                                              
            <tr key={emp.id}>
                <td>{emp.ename}</td>
                <td>{emp.ejob}</td>
            </tr>)
            
            });
        return(
        /* <div className="container">
            <div className="row">
                <div className="col">EmpName</div>
                <div className="col">{this.props.ename}</div>
            </div>
            <div className="row">
                <div className="col">EmpJobRole</div>
                <div className="col">{this.props.ejob}</div>
            </div>
        </div> */
       /* <div className="container">
            <div className="row">
                <div className="col">EmpName</div>
                <div className="col">{ename}</div>
            </div>
            <div className="row">
                <div className="col">EmpJobRole</div>
                <div className="col">{ejob}</div>
            </div>
            <div className="row">
                <div className="col">EmpList</div>
                <div className="col">
                                <table>
                                <tr>
                                    <td>Ename</td>
                                    <td>Ejob</td>
                                </tr>
                                {eList}

                                </table>
                </div>
            </div>
        </div>
        );
    }

}
 */