import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../../components/UI/Buttons/Button";
import classes from "./ContactData.css";
import axios from "../../../axios";
import Spinner from "../../../components/UI/Spiner/Spinner";
import Input from "../../../components/UI/Input/Input";
import withErrorHandler from "../../../HOC/withErrorHandler/withErrorHandler";
import * as orderActions from "../../../store/actions/index";
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementtype: "input",
        elementconfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        validatio: {
          required: true,
        },
        isValid: false,
        touched: false,
      },
      street: {
        elementtype: "input",
        elementconfig: {
          type: "text",
          placeholder: "Street Name",
        },
        value: "",
        validatio: {
          required: true,
        },
        isValid: false,
        touched: false,
      },
      zipCod: {
        elementtype: "input",
        elementconfig: {
          type: "text",
          placeholder: "Zip Code",
        },
        value: "",
        validatio: {
          required: true,
          minlength: 5,
          maxlength: 7,
        },
        isValid: false,
        touched: false,
      },
      country: {
        elementtype: "input",
        elementconfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validatio: {
          required: true,
        },
        isValid: false,
        touched: false,
      },
      email: {
        elementtype: "input",
        elementconfig: {
          type: "email",
          placeholder: "Your E-mail",
        },
        value: "",
        validatio: {
          required: true,
        },
        isValid: false,
        touched: false,
      },
      deliveryMothed: {
        elementtype: "select",
        elementconfig: {
          option: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
        validatio: {},
        isValid: true,
      },
    },
    formIsValid: false,
  };
  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minlength) {
      isValid = value.length >= rules.minlength && isValid;
    }
    if (rules.maxlength) {
      isValid = value.length <= rules.maxlength && isValid;
    }
    return isValid;
  }

  orderHandler = (e) => {
    e.preventDefault();
    const formData = {};
    for (let elementIdentifier in this.state.orderForm) {
      formData[elementIdentifier] = this.state.orderForm[
        elementIdentifier
      ].value;
    }
    const order = {
      ingrediant: this.props.ings,
      price: this.props.price,
      orderData: formData,
    };

    this.props.onBuegerPosting(order, this.props.token);
  };
  inputChangeHandler = (e, inputIdentifier) => {
    const updateOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...updateOrderForm[inputIdentifier],
    };
    updatedFormElement.value = e.target.value;
    updatedFormElement.isValid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validatio
    );
    updatedFormElement.touched = true;
    updateOrderForm[inputIdentifier] = updatedFormElement;
    let formIsValid = true;
    for (let inputIdentifier in updateOrderForm) {
      formIsValid = updateOrderForm[inputIdentifier].isValid && formIsValid;
    }
    this.setState({ orderForm: updateOrderForm, formIsValid: formIsValid });
  };
  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        cofig: this.state.orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            elementtype={formElement.cofig.elementtype}
            elementconfig={formElement.cofig.elementconfig}
            value={formElement.cofig.value}
            invalid={!formElement.cofig.isValid}
            shouldValidate={formElement.cofig.validatio}
            touched={formElement.cofig.touched}
            changed={(e) => this.inputChangeHandler(e, formElement.id)}
          />
        ))}

        <Button btnType="Success" disabled={!this.state.formIsValid}>
          Order Now
        </Button>
      </form>
    );
    if (this.props.orderLoading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBulider.ingrediant,
    price: state.burgerBulider.totalPric,
    orderLoading: state.order.orderLoading,
    token: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onBuegerPosting: (orderData, token) => {
      dispatch(orderActions.purchasingStart(orderData, token));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
