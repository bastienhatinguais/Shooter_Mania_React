import React from "react";
import "./styles.css";
import IdentificationForms from "./components/identification_forms";
import { Container } from "@material-ui/core";
import "@fontsource/roboto";
import Authentification from "./connection";

export default class App extends React.Component {
  state = {
    id: "Vous n'êtes pas connecté"
  };

  handlerConnection = async (mail, password) => {
    Authentification.connection(mail, password).then((id) => {
      this.setState({ id: id });
    });
  };

  handlerRegister = async (name, firstName, email, password, username) => {
    Authentification.register(name, firstName, email, password, username).then(
      (id) => {
        this.setState({ id: id });
      }
    );
  };

  render() {
    return (
      <div className="App">
        <Container
          maxWidth="sm"
          style={{ height: "100%" }}
          flexDirection="column"
        >
          <h1 style={{ marginTop: "20px" }}>SHOOTER MANIA</h1>
          <h3>{this.state.id}</h3>
          <IdentificationForms
            connection={this.handlerConnection}
            register={this.handlerRegister}
          ></IdentificationForms>
        </Container>
      </div>
    );
  }
}
