import React, { Component } from "react";
import Model from "../../components/UI/Model/MOdel";
import Aux from "../Aux";
const withErrorHandler = (WrappComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentWillMount() {
      this.reqInterceptors = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptors = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }
    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptors);
      axios.interceptors.response.eject(this.resInterceptors);
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Aux>
          <Model
            show={this.state.error}
            modelClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Model>
          <WrappComponent {...this.porps} />
        </Aux>
      );
    }
  };
};
export default withErrorHandler;
