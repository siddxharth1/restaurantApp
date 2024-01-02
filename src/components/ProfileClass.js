import React from 'react';
class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        //Create state
        this.state={
            count: 0,
            count2: 1
        }
    }
    render(){
        const{count2} = this.state;
        return(
            <div>
                <h1>Class component</h1>
                <h2>Name: {this.props.name}</h2>
                <h2>Counter: {this.state.count}</h2>
                <h2>Counter: {count2}</h2>
                <button onClick={()=>{
                    this.setState({count2: 2})
                }}>Count</button>
            </div>
        )
    }
}

export default ProfileClass