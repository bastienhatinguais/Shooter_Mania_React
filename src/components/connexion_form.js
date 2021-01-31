import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import EmailIcon from "@material-ui/icons/Email";
import { Animate } from "react-simple-animate";

class ConnexionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texte: "",
      password: "",
      showPassword: false,
      play: false,
      email: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.email !== "" && this.state.password) {
      this.setState({ texte: "" });
      this.props.connection(this.state.email, this.state.password);
    }
  };

  handleChange = (prop) => (event) => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleInscription = () => {
    this.setState({ play: !this.state.play });
    this.props.handlerChange();
  };

  render() {
    return (
      <Animate
        play={this.state.play} // set play true to start the animation
        duration={1} // how long is the animation duration
        delay={0.3} // how many delay seconds will apply before the animation start
        start={{ opacity: 1, transform: "translateX(0)" }}
        end={{ opacity: 0, transform: "translateX(-500px)" }}
        complete={{ display: "none" }}
        easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
      >
        <Box
          display="flex"
          justifyContent="space-around"
          flexDirection="column"
          width="60%"
          boxShadow={2}
          borderRadius={16}
          padding={3}
          style={{ marginLeft: "auto", marginRight: "auto", marginTop: "20" }}
        >
          <h2>Se connecter</h2>
          <form onSubmit={this.handleSubmit}>
            <FormControl fullWidth>
              <label>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="input-with-icon-adornment"
                  fullWidth
                  type="email"
                  onChange={this.handleChange("email")}
                  endAdornment={
                    <InputAdornment position="end">
                      <EmailIcon
                        style={{ marginRight: "13px", color: "grey" }}
                      />
                    </InputAdornment>
                  }
                />
              </label>
            </FormControl>
            <FormControl fullWidth>
              <label>
                <InputLabel htmlFor="mdp">Mot de passe</InputLabel>
                <Input
                  id="mdp"
                  type={this.state.showPassword ? "text" : "password"}
                  value={this.state.password}
                  onChange={this.handleChange("password")}
                  fullWidth
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleMouseDownPassword}
                      >
                        {this.state.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </label>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
              Se connecter
            </Button>
          </form>
          <Button
            color="secondary"
            size="small"
            onClick={this.handleInscription}
            style={{ marginTop: "20px" }}
          >
            S'inscrire
          </Button>
        </Box>
      </Animate>
    );
  }
}
export default ConnexionForm;
