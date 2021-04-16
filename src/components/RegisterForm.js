import React, { useState } from "react";

const RegisterForm = ({ onRouteChange, updateLoadUser }) => {
  const [email, addEmail] = useState("");
  const [name, addName] = useState("");
  const [password, addPassword] = useState("");

  //to change the state to what the user writes in the signin form
  const onEmailChange = (event) => {
    addEmail(event.target.value);
  };

  const onNameChange = (event) => {
    addName(event.target.value);
  };

  const onPasswordChange = (event) => {
    addPassword(event.target.value);
  };

  //when the user submit is going to post the info and then if we guet a response
  const onSubmitRegister = (e) => {
    e.preventDefault(); //prevent the default submit event. Don't forget to put also on e param on the onSubmitSignIn - SigninForm
    fetch("https://guarded-peak-18752.herokuapp.com/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        //in our server, the register post resturn the last user, so the response is going to be the user details
        if (user) {
          updateLoadUser(user); //is to update the user profile
          onRouteChange("signin");
        }
      });
  };

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center ">
      <main className="pa4">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0" style={{ color: " #2a9d8f" }}>
              Register
            </legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="name">
                Name
              </label>
              <input
                required="required"
                className="f7 pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                onChange={onNameChange}
              />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="email-address">
                Email
              </label>
              <input
                required
                className="f7 pa2 input-reset ba bg-transparent w-100"
                type="email"
                name="email-address"
                id="email-address"
                placeholder="Enter your email"
                onChange={onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" for="password">
                Password
              </label>
              <input
                required
                className="f7 pa2 input-reset ba bg-transparent w-100"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                onChange={onPasswordChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input // when submit Register it will change the state from signin to mealplanner so that user can access the mealplanner
              onClick={(e) => onSubmitRegister(e)}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register"
              style={{ color: " #2a9d8f" }}
            />
          </div>
          <div className="lh-copy mt3">
            <p // when submit Signin it will change to register to show the registerForm
              onClick={() => onRouteChange("signin")}
              className="f6 link dim black db pointer"
            >
              Signin
            </p>
          </div>
        </form>
      </main>
    </article>
  );
};

export default RegisterForm;
