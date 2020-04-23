import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./Auth.css";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Buttons/Button";
import Spinner from "../../components/UI/Spiner/Spinner";
class Authan extends Component {
  state = {
    contrals: {
      email: {
        elementtype: "input",
        elementconfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        isValid: false,
        touched: false,
      },
      password: {
        elementtype: "input",
        elementconfig: {
          type: "password",
          placeholder: "Your password",
        },
        value: "",
        validation: {
          required: true,
          minlength: 7,
        },
        isValid: false,
        touched: false,
      },
    },
    isSignUp: true,
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minlength) {
      isValid = value.length >= rules.minlength && isValid;
    }
    if (rules.maxlength) {
      isValid = value.length <= rules.maxlength && isValid;
    }
    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid;
    }
    return isValid;
  }
  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.contrals,
      [controlName]: {
        ...this.state.contrals[controlName],
        value: event.target.value,
        isValid: this.checkValidity(
          event.target.value,
          this.state.contrals[controlName].validation
        ),
        touched: true,
      },
    };
    this.setState({ contrals: updatedControls });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.props.onAuth(
      this.state.contrals.email.value,
      this.state.contrals.password.value,
      this.state.isSignUp
    );
  };
  switchAuthModeHandler = () => {
    this.setState((preState) => {
      return { isSignUp: !preState.isSignUp };
    });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.contrals) {
      formElementsArray.push({
        id: key,
        cofig: this.state.contrals[key],
      });
    }
    let form = formElementsArray.map((formElement) => (
      <Input
        key={formElement.id}
        elementtype={formElement.cofig.elementtype}
        elementconfig={formElement.cofig.elementconfig}
        value={formElement.cofig.value}
        invalid={!formElement.cofig.isValid}
        shouldValidate={formElement.cofig.validation}
        touched={formElement.cofig.touched}
        changed={(e) => this.inputChangedHandler(e, formElement.id)}
      />
    ));
    if (this.props.loading) {
      form = <Spinner />;
    }
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }
    return (
      <div className={classes.Authantication}>
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">SUBMIT</Button>
        </form>
        <Button clicked={this.switchAuthModeHandler} btnType="Danger">
          Switch to {this.state.isSignUp ? "Sign In" : "Sign Up"}
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Authan);
