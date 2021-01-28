import { Route } from "react-router-dom"
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
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
import MemberListPage from "./pages/member/MemberListPage";
import MemberModifyPage from "./pages/member/MemberModifyPage";
import MemberReadPage from "./pages/member/MemberReadPage";
import MemberRegisterPage from "./pages/member/MemberRegisterPage";

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

      <Route component={SignUpPage} path="/signup" />

      <Route component={MemberListPage} path="/member" exact />
      <Route component={MemberRegisterPage} path="/member/create" />
      <Route component={MemberModifyPage} path="/member/edit/:userNo" />
      <Route component={MemberReadPage} path="/member/read/:userNo" />
    </>

  )
}

export default App;
