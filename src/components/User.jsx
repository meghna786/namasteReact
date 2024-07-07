const User=(props)=>{
      return (
            <div style={{border:'1px solid black'}}>
                  <h1>Name- {props.name}</h1>
                  <h3>Location- {props.location}</h3>
                  <h3>Description- {props.description}</h3>
            </div>
      )
}

export default User;