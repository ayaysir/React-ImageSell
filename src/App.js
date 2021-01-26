import { Route } from "react-router-dom"
import SignInPage from "./pages/auth/SignInPage";
import HomePage from "./pages/HomePage"

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={SignInPage} path="/signin" exact />
    </>

  )
}

export default App;
