// Import Area

import React from 'react';
import ReactDOM from 'react-dom/client';

// Every component can have its own data/states 
class A extends React.Component
{
  // 1. 

  // 2. 
  constructor()
  {
    super();
    this.state={    //  State is a Js Object of the class which can hold some data
                  name:"Rohan", 
                  surname:"Sharma", 
                  address:"UP"
                }  // state initialization
  }

  // 3. 
  render()
  {
    // Updating the existing state
      this.setState({
        ...this.state,  // '...' is spread sheet operator
        name:"Ajay"
      });
      return <>
        <h1>Hello {this.state.name} {this.state.surname}</h1>
        <h1>Hello {this.state.address}</h1>
        <h1>Hello {this.props.name}</h1>
        <h1>Hello {this.props.surname}</h1>
        <h1>Hello {this.props.children}</h1>
    </>
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<A name="Amitabh" surname="Bachchan">Mumbai</A>);