import React from "react";
import styles from "./MyStyles.module.css";
import { Component, useContext } from "react";
const { Provider, Consumer } = React.createContext();

class ImageContextProvider extends Component {
  state = {
    theme: "dark",
  };

  toggleTheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === "dark" ? "face" : "dark",
      };
    });
  };

  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ImageContextProvider, Consumer as ImageContextConsumer };
