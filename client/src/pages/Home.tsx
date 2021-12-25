import { observer } from "mobx-react-lite";
import { FC } from "react";

import { Routes, Route } from "react-router-dom";
import GroupForm from "../components/GroupForm/GroupForm";
import SidebarLayout from "../layouts/SidebarLayout";

export const HomePage: FC = observer(() => {
  return (
    <>
      <SidebarLayout>
        <Routes>
          <Route path={`addgroup`} element={<GroupForm />} />
        </Routes>
      </SidebarLayout>
    </>
  );
});
