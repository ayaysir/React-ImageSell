import { Route } from "react-router-dom"
import SignInPage from "./pages/auth/SignInPage";
import HomePage from "./pages/HomePage"
import AdminSetupPage from "./pages/member/AdminSetupPage";

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={SignInPage} path="/signin" exact />
      <Route component={AdminSetupPage} path="/member/setup" />
    </>

  )
}

export default App;
