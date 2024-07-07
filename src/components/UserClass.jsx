import React from 'react';

class UserClass extends React.Component{
      constructor(props){
            super(props);
      }

      render(){
            return (
                  <div style={{border:'1px solid black'}}>
                  <h1>Name- {this.props.name}</h1>
                  <h3>Location- {this.props.location}</h3>
                  <h3>Description- {this.props.description}</h3>
            </div>
            )
      }
}

export default UserClass;