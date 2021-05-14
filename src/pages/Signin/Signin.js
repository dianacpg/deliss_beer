import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SigninForm from "../../components/SigninForm";
import RegisterForm from "../../components/RegisterForm";
import BeerMatch from "../../components/BeerMatch/BeerMatch";
import { UserContext } from "../../components/UserContext";
import "./SignIn.css";

const Signin = () => {
  const [route, setRoute] = useState("signin"); // The authentification will be determine by the route state. Signin means that the user has to sign in.
  const [user, loadUser] = useState({
    //this is for when to update the profile informations when we register or signin
    id: "",
    name: "",
    email: "",
    favorites: "",
    joined: "",
  });

  // To Persist state to localstorage. If we have the state store on localstore, change state to that, when refresh page
  useEffect(() => {
    const localdata = localStorage.getItem("save-status");
    if (localdata) {
      loadUser(JSON.parse(localdata));
    }
  }, []);

  // to add the state route into local storage has a string!
  useEffect(() => {
    localStorage.setItem("save-status", JSON.stringify(user));
  });

  //this will change the route state, that will determine the validation to show mealplan ou not
  const onRouteChange = (route) => {
    setRoute(route);
  };

  const updateLoadUser = (data) => {
    loadUser({
      id: data.id,
      name: data.name,
      email: data.email,
      favorites: data.entries,
      joined: data.joined,
    });
  };

  const onSignout = () => {
    loadUser({
      id: "",
      name: "",
      email: "",
      favorites: "",
      joined: "",
    });
    setRoute("signin");
  };

  return (
    <div>
      <UserContext.Provider value={user}>
        {route === "beermatch" || user.id ? (
          <div>
            {/* Added a signout option that will change the state to sigin. This means that beermatch will not be shown */}
            <div className="welcomeboard">
              <p className="hello">Hello {user.name}!</p>

              <Link to={`/favorites/${user.id}`}>
                <button id="btn_home" type="button">
                  {" "}
                  Check your Favorite Beers!
                </button>
              </Link>
              <p onClick={() => onSignout()}>Signout</p>
            </div>
            <BeerMatch />
          </div>
        ) : route === "signin" ? ( // If the route state is "signin" it will show only the sign in form. If the route is not signin, that means the user is logged so the beermatch will be shown
          <SigninForm
            updateLoadUser={updateLoadUser}
            onRouteChange={onRouteChange}
          />
        ) : (
          <RegisterForm
            updateLoadUser={updateLoadUser}
            onRouteChange={onRouteChange}
          />
        )}
      </UserContext.Provider>
    </div>
  );
};

export default Signin;
