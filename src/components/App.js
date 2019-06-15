import React, { useContext } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import CreateLink from "./Link/CreateLink"
import Login from "./Auth/Login"
import ForgotPassword from "./Auth/ForgotPassword"
import SearchLinks from "./Link/SearchLinks"
import LinkList from "./Link/LinkList"
import LinkDetail from "./Link/LinkDetail"
import Header from "./Header"
import useAuth from "./Auth/useAuth"
import firebase, { FirebaseContext } from "../firebase"
import Nav from "./Nav"

function App() {
  const user = useAuth()

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <div className="min-vh-100 bg-warning">
          <Nav />
          <Header />
          <div className="route-container">
            <Switch>
              <Route path="/" exact render={() => <Redirect to="/new/1" />} />
              <Route path="/create" component={CreateLink} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={ForgotPassword} />
              <Route path="/search" component={SearchLinks} />
              <Route path="/top" component={LinkList} />
              <Route path="/new/:page" component={LinkList} />
              <Route path="/link/:linkId" component={LinkDetail} />
            </Switch>
          </div>
          <button className="btn">Hello</button>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  )
}

export default App
