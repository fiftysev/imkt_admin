import { observer } from "mobx-react-lite";

import { Routes, Route } from "react-router-dom";
import GroupForm from "../components/GroupForm/GroupForm";
import GroupsView from "../components/GroupsView";
import MasterForm from "../components/MasterForm";
import MastersView from "../components/MastersView";
import SidebarLayout from "../layouts/SidebarLayout";

export const HomePage = observer(() => {
  return (
    <>
      <SidebarLayout>
        <Routes>
          <Route path={`addgroup`} element={<GroupForm isNew={true} />} />
          <Route path={`addmaster`} element={<MasterForm />} />
          <Route path={`groupslist*`} element={<GroupsView />} />
          <Route path={`masterslist`} element={<MastersView />} />
        </Routes>
      </SidebarLayout>
    </>
  );
});
