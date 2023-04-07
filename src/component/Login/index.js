import React from "react";
import { connect } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
import {createStructuredSelector} from 'reselect';
import {
  
} from "./selector";
import { Button } from "primereact/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import {

} from "./action";
import TopNav from "../TopNav";
class UserLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      conditional: true,
      setErrorMessage: ''
    };
  }
  render() {
    return (
      <div className="grid">
        <Toast ref={(el) => (this.toast = el)} />
        <div className="col-12">
          <TopNav />
          <h1>User Login</h1>
        </div>
      </div>
    );
  }
}
UserLogin.propTypes = {
  
};
const mapStateToProps = createStructuredSelector({
  
});

const mapDispatchToProps = (dispatch)=>{
    return {
      dispatch,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
