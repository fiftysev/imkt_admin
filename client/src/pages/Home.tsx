import { observer } from "mobx-react-lite";
import { FC } from "react";

import { Routes, Route } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import { SignUpForm } from "../components/SignUpForm";
import SidebarLayout from "../layouts/SidebarLayout";

export const HomePage: FC = observer(() => {
  return (
    <>
      <SidebarLayout>
        <Routes>
          <Route path={`groups`} element={<SignInForm />} />
          <Route path={`masters`} element={<SignUpForm />} />
        </Routes>
      </SidebarLayout>
    </>
  );
});
