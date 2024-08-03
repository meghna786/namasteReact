import React from 'react';

class UserClass extends React.Component{
      constructor(props){
            super(props); // its parent class is not About, but React.Component
            this.state={
                  count:0,
                  count2:2
            }
            console.log(this.props.name+'child constructor');
      }

      componentDidMount(){
            console.log(this.props.name+'child componentDidMount');
      }

      render(){
            console.log(this.props.name+'child render');
            return (
                  <div style={{border:'1px solid black'}}>
                  <h1>Name- {this.props.name}</h1>
                  <h3>Location- {this.props.location}</h3>
                  <h3>Description- {this.props.description}</h3>
                  <h3>count- {this.state.count}</h3>
                  <button onClick={()=>{
                        this.setState({
                              count:this.state.count+1
                        })
                  }}>Increase count value</button>
                  <h3>count2- {this.state.count2}</h3>
            </div>
            )
      }
}

export default UserClass;