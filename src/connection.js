class Authentification {
  static connection(email, password) {
    const url =
      "https://cqhue.sse.codesandbox.io/connection?email=" +
      email +
      "&password=" +
      password;
    let fetchOptions = { method: "GET" };
    let id = fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        //console.log(dataJSON[0]._id);
        return dataJSON[0]._id;
      })
      .catch((error) => {
        console.log(error);
      });
    return id;
  }

  static register(name, firstName, email, password, username) {
    let newUser = {
      name: name,
      first_name: firstName,
      email: email,
      password: password,
      username: username
    };
    let myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");
    const url = "https://cqhue.sse.codesandbox.io/register";
    let fetchOptions = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: myHeader
    };
    // executer la req AJAX
    let id = fetch(url, fetchOptions)
      .then(function (response) {
        //console.log(response.text());
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        return dataJSON.id;
      })
      .catch((error) => {
        console.log(error);
      });
    return id;
  }
}
export default Authentification;
