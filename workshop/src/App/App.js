import React from "react";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import Main from "./Main/Main";
import Aside from "../Aside/Aside";
import Posts from "../publications/Posts/Posts";
import Logout from "../Logout/Logout";
import Detail from "../publications/Detail/Detail";
import CreatePost from "../publications/CreatePost/CreatePost";
import Footer from "../Footer/Footer";
import Loader from "./Loader/Loader";
// import Profile from '../Profile/Profile';
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Store, { StoreContext } from "../Store/Store";
import { loginSuccess } from "../Store/actions";
import EditPost from "../publications/EditPost/EditPost";

const Profile = React.lazy(() => import("../Profile/Profile"));

function render(title, Cmp) {
  return function(props) {
     
    return (
      <Main title={title}>
        <Cmp {...props} />
      </Main>
    );
  };
}

// function parseCookeis() {
//   return document.cookie.split("; ").reduce((acc, cookie) => {
//     const [cookieName, cookieValue] = cookie.split("=");
//     acc[cookieName] = cookieValue;
//     return acc;
//   }, {});
// }

const Auth = ({ children }) => {
  const { dispatch } = React.useContext(StoreContext);
  React.useEffect(() => {
    fetch("http://localhost:9999/auth", { credentials: "include" })
      .then(res =>
        res.status === 200
          ? res.json()
          : res.text().then(text => Promise.reject(text))
      )
      .then(user => dispatch(loginSuccess(user)))
      .catch(() => {
        debugger;
        dispatch(loginSuccess(null));
      });
  }, []);

  return  <span>{children}</span>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Store>
        <Auth>
          <StoreContext.Consumer>
            {({ state }) => {
               
              const { user } = state;
              const isLogged = !!state.user;
              

              return user === undefined ? (
                <div>Loading...</div>
              ) : (
                <div className="App">
                  <Loader local={true} isLoading={false} />
                  <Navigation isLogged={isLogged} user={user} />
                  <div className="Container">
                    
                    <Switch>
                      <Route path="/" exact>
                        <Redirect to="/posts" />
                      </Route>
                      
                      <Route
                        path="/posts"
                        render={render("Scary Stories", Posts, { isLogged },{user})}
                      />
                      <Route
                        path="/post/:id"
                        render={render("Story", Detail, {user})}
                      />
                      <Route
                      path="/edit-post/:id"
                      render={render("Edit Story", EditPost, {isLogged})}
                    />
                      <Route
                        path="/logout"
                        render={
                          isLogged
                            ? render("Logout", Logout, { isLogged })
                            : () => <Redirect to="/" />
                        }
                      />
                      <Route
                        path="/create-posts"
                        exact
                        render={render("Create Post", CreatePost)}
                      />
                      }
                      {isLogged && (
                        <Route path="/profile">
                          <Main title="Profile">
                            <React.Suspense
                              fallback={<Loader isLoading={true} />}
                            >
                              <Profile user={user}></Profile>
                            </React.Suspense>
                          </Main>
                        </Route>
                      )}
                      <Route
                        path="/login"
                        render={
                          !isLogged
                            ? render("Login", Login, { isLogged })
                            : () => <Redirect to="/" />
                        }
                      />
                      {!isLogged && (
                        <Route
                          path="/register"
                          render={render("Register", Register, { isLogged })}
                        />
                      )}
                      <Route path="*">
                        <Main title="Not Found">
                          <NotFound />
                        </Main>
                      </Route>
                    </Switch>
                  </div>
                  <Footer isLogged={isLogged} />
                </div>
              );
            }}
          </StoreContext.Consumer>
        </Auth>
      </Store>
    </BrowserRouter>
  );
};

export default App;
