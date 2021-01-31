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

class InscriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      name: "",
      first_name: "",
      showPassword: false,
      play: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.register(
      this.state.name,
      this.state.first_name,
      this.state.email,
      this.state.password,
      this.state.username
    );
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

  handleConnexion = (event) => {
    event.preventDefault();
    this.props.handlerChange();
  };

  render() {
    return (
      <Animate
        play={this.state.play} // set play true to start the animation
        duration={1} // how long is the animation duration
        delay={0.3} // how many delay seconds will apply before the animation start
        start={{ transform: "translate(0, 0)" }}
        end={{ transform: "translate(10px, 10px)" }}
        complete={{ display: "none" }}
        easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
      >
        <Box
          display="flex"
          justifyContent="space-around"
          flexDirection="column"
          width="70%"
          boxShadow={2}
          borderRadius={16}
          padding={3}
          style={{ marginLeft: "auto", marginRight: "auto", marginTop: "20" }}
        >
          <h2>S'inscrire</h2>
          <form onSubmit={this.handleSubmit}>
            <FormControl fullWidth>
              <label>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  fullWidth
                  onChange={this.handleChange("email")}
                  type="email"
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
            <Box display="flex" justifyContent="space-between">
              <FormControl>
                <label>
                  <InputLabel htmlFor="first_name">Prénom</InputLabel>
                  <Input
                    id="first_name"
                    type="text"
                    onChange={this.handleChange("first_name")}
                  />
                </label>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="name">Nom</InputLabel>
                <Input
                  id="name"
                  type="text"
                  onChange={this.handleChange("name")}
                />
              </FormControl>
            </Box>
            <FormControl fullWidth>
              <label>
                <InputLabel htmlFor="username">Pseudo</InputLabel>
                <Input
                  id="username"
                  fullWidth
                  type="text"
                  onChange={this.handleChange("username")}
                />
              </label>
            </FormControl>
            <FormControl fullWidth>
              <label>
                <InputLabel htmlFor="password">Mot de passe</InputLabel>
                <Input
                  id="password"
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
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => {
                this.handleSubmit(e);
              }}
            >
              S'inscrire
            </Button>
          </form>
          <Button
            onClick={this.handleConnexion}
            color="secondary"
            size="small"
            style={{ marginTop: "20px" }}
          >
            Se connecter
          </Button>
        </Box>
      </Animate>
    );
  }
}
export default InscriptionForm;
