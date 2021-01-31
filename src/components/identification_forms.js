import React from "react";
import ConnexionForm from "./connexion_form";
import InscriptionForm from "./inscription_form";

class IdentificationForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      afficherConnexion: true
    };
  }

  handlerChangePanel = () => {
    this.setState({ afficherConnexion: !this.state.afficherConnexion });
  };

  render() {
    return (
      <div>
        {this.state.afficherConnexion ? (
          <ConnexionForm
            handlerChange={this.handlerChangePanel}
            connection={this.props.connection}
          ></ConnexionForm>
        ) : (
          <InscriptionForm
            handlerChange={this.handlerChangePanel}
            register={this.props.register}
          ></InscriptionForm>
        )}
      </div>
    );
  }
}
export default IdentificationForms;
