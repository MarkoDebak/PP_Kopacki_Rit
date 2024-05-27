import "../styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Podaci from "./Podaci";
import React, { Component } from "react";

class Login extends Component {
  state = {
    ime: "",
    prezime: "",
    godine: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("Forma je potvrdjena ", this.state.ime);
  };

  render() {
    let osoba = {
      name: "Mate",
      surname: "Matić",
      password: "qwerty",
    };

    return (
      <div>
        <Header></Header>

        <h1>Moje ime je {this.state.ime}</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="ime:"
            value={this.state.ime}
            onChange={(e) => this.setState({ ime: e.target.value })}
          />
          <input
            type="text"
            placeholder="prezime:"
            value={this.state.prezime}
            onChange={(e) => this.setState({ prezime: e.target.value })}
          />
          <input
            type="number"
            placeholder="godine:"
            value={this.state.godine}
            onChange={(e) => this.setState({ godine: e.target.value })}
          />
          <button type="submit">Potvrdi</button>
        </form>
        <Podaci podaci={osoba} />
        <Footer></Footer>
      </div>
    );
  }
}
export default Login;
