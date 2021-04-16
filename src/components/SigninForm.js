import React, { useState } from "react";

const SigninForm = ({ onRouteChange, updateLoadUser }) => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSigninPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  //to change the state to what the user writes in the signin form
  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setSigninPassword(event.target.value);
  };

  //When submit, we will connect to the server to post the email and password
  const onSubmitSignIn = (e) => {
    e.preventDefault(); //prevent the default submit event. Don't forget to put also on e param on the onSubmitSignIn - SigninForm
    fetch("https://guarded-peak-18752.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        //after we post, if it matches with the email and password database, the response from the server will be user details. So if we receive an id that means it was the post === database
        if (user.id) {
          updateLoadUser(user); //to update user details
          onRouteChange("mealplanner"); // to change state from signin to mealplanner and show the mealplan
        } else {
          setErrorLogin("Wrong Credentials!");
        }
      });
  };

  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center ">
      <main className="pa4">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0" style={{ color: " #2a9d8f" }}>
              Sign In
            </legend>

            <div className="mt3">
              <label className="db fw6 lh-copy f6" for="email-address">
                Email
              </label>
              <input
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
            <input // when submit Signin it will change the state from signin to mealplanner so that the mealplanner in order to access the mealplan
              onClick={(e) => onSubmitSignIn(e)}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              style={{ color: " #2a9d8f" }}
            />
          </div>
          {errorLogin != "" && <p id="error">{errorLogin}</p>}
          <div className="lh-copy mt3">
            <p // when submit Signin it will change to register to show the registerForm
              onClick={() => onRouteChange("register")}
              className="f6 link dim black db pointer"
              style={{ color: " #2a9d8f" }}
            >
              Register
            </p>
          </div>
        </form>
      </main>
    </article>
  );
};

export default SigninForm;
