import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./style/dark.scss"
import { Suspense, useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { useTranslation } from "react-i18next";
import "./i18n"
import { sourceInputs, resourceInputs, groupInputs, resourceXInputs, registersInputs } from "./formSource";
import React from 'react'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { sourceColumns, resourcesColumns, groupsColumns, registersColumns, resourceXColumns} from "./datatablesource"
function App() {
  
  const {darkMode} = useContext(DarkModeContext)
  const {t} = useTranslation()
  return (
    <div className={darkMode ? "app dark" : "app"}>
       <Suspense fallback={null}>
       <ReactNotifications />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home url="/api/registry-chart"/>} />
            <Route path="sources" >
              <Route index element={<List title={t("datatables.sources")} link="/sources/new" list="sourceSystemList" columns={sourceColumns} url="/api/sources" rowId="sourceSystemCd"/> }/>
              <Route path=":sourceId" element={<Single/>}/>
              <Route  path="new"
                element={<New inputs={sourceInputs} titleNew="Добавить новый источник" url="/api/sources"/>}/>
            </Route>
            <Route path="resources">
              <Route index element={<List title={t("datatables.resources")} link="/resources/new" list="resourceList" columns={resourcesColumns}  url="/api/resource" rowId="resourceCd"/>}/>
              <Route path=":resourceId" element={<Single/>}/>
              <Route path="new" element={<New inputs={resourceInputs} titleNew="Добавить новый ресурс" url="/api/resource"/>}/>
            </Route>
            <Route path="group">
              <Route index element={<List title={t("datatables.groupResources")} link="/group/new" list="resourceGroupList" columns={groupsColumns} url="/api/resource-group" rowId="resourceGroupCd"/>}/>
              <Route path=":groupId" element={<Single/>}/>
                              <Route path="new" element={<New inputs={groupInputs} titleNew="Добавить новую группу ресурсов" url="/api/resource-group" />}/>
            </Route>
            <Route path="registers" >
              <Route index element={<List title={t("datatables.registers")} link="/registers/new" list="resourceRegistryList" columns={registersColumns} url="/api/registry" rowId="registerId"/>}/>
              <Route path=":registerId" element={<Single/>}/>
              <Route path="new" element={<New inputs={registersInputs} titleNew="Добавить новый реестр" url="/api/registry"/>}/>
            </Route>
                          <Route path="resourcesx" >
                              <Route index element={<List title={t("datatables.resourcesx")} link="/resourcesx/new" list="resourceXSourceList" columns={resourceXColumns} url="/api/resource-and-source" rowId="resourceId"/>} />
              <Route path=":resourcexId" element={<Single/>}/>
              <Route path="new" element={<New inputs={resourceXInputs} titleNew="Добавить новый ресурс и источник" url="/api/resource-and-source"/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
