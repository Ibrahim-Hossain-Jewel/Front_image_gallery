import React from "react";
import TopNav from "../TopNav";
class Welcome extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return (
          <div className="grid">
            <div className="col-12">
              <TopNav />
              <h2>Welcome to Application</h2>
              <p>All user data</p>
            </div>
          </div>
        );
    }
}
export default Welcome;