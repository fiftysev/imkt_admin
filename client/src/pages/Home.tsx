import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import { Context } from "..";
import GroupForm from "../components/GroupForm/GroupForm";
import GroupsView from "../components/GroupsView";
import MasterForm from "../components/MasterForm";
import MastersView from "../components/MastersView";
import SidebarLayout from "../layouts/SidebarLayout";
import { IGroup } from "../models/IGroup";

export const HomePage = observer(() => {
  const { dataStore } = useContext(Context);
  const [group, setGroup] = useState<IGroup>();

  useEffect(() => {
    console.log(dataStore.groups[dataStore.groups.length - 1]);
    setGroup(dataStore.groups[dataStore.groups.length - 1]);
  }, [dataStore.groups, group]);
  return (
    <>
      <SidebarLayout>
        <Routes>
          <Route path={`addgroup`} element={<GroupForm groupData={group} />} />
          <Route path={`addmaster`} element={<MasterForm />} />
          <Route path={`groupslist`} element={<GroupsView />} />
          <Route path={`masterslist`} element={<MastersView />} />
        </Routes>
      </SidebarLayout>
    </>
  );
});
