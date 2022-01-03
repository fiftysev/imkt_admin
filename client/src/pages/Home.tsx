import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import { Context } from "..";
import GroupForm from "../components/GroupForm/GroupForm";
import SidebarLayout from "../layouts/SidebarLayout";
import { IGroup } from "../models/IGroup";

export const HomePage = observer(() => {
  const { dataStore } = useContext(Context);
  const [group, setGroup] = useState<IGroup>();

  useEffect(() => {
    setGroup(dataStore.groupToUpd);
  }, [dataStore.groupToUpd, group]);
  return (
    <>
      <SidebarLayout>
        <Routes>
          <Route path={`addgroup`} element={<GroupForm groupData={group} />} />
        </Routes>
      </SidebarLayout>
    </>
  );
});
