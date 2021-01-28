import { Route } from "react-router-dom"
import SignInPage from "./pages/auth/SignInPage";
import CodeDetailListPage from "./pages/codedetail/CodeDetailListPage";
import CodeDetailModifyPage from "./pages/codedetail/CodeDetailModifyPage";
import CodeDetailReadPage from "./pages/codedetail/CodeDetailReadPage";
import CodeDetailRegisterPage from "./pages/codedetail/CodeDetailRegisterPage";
import CodeGroupListPage from "./pages/codegroup/CodeGroupListPage";
import CodeGroupModifyPage from "./pages/codegroup/CodeGroupModifyPage";
import CodeGroupReadPage from "./pages/codegroup/CodeGroupReadPage";
import CodeGroupRegisterPage from "./pages/codegroup/CodeGroupRegisterPage";
import HomePage from "./pages/HomePage"
import AdminSetupPage from "./pages/member/AdminSetupPage";

function App() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={SignInPage} path="/signin" exact />
      <Route component={AdminSetupPage} path="/member/setup" />

      <Route component={CodeGroupListPage} path="/codegroup" exact />
      <Route component={CodeGroupRegisterPage} path="/codegroup/create" />
      <Route component={CodeGroupModifyPage} path="/codegroup/edit/:groupCode" />
      <Route component={CodeGroupReadPage} path="/codegroup/read/:groupCode" />

      <Route component={CodeDetailListPage} path="/codedetail/" exact />
      <Route component={CodeDetailRegisterPage} path="/codedetail/create" />
      <Route component={CodeDetailModifyPage} path="/codedetail/edit/:groupCode/:codeValue" />
      <Route component={CodeDetailReadPage} path="/codedetail/read/:groupCode/:codeValue" />
    </>

  )
}

export default App;
