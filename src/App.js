import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./style/dark.scss"
import { Suspense, useContext, useState } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { useTranslation } from "react-i18next";
import "./i18n"

function App() {
  
  const {darkMode} = useContext(DarkModeContext)
  const {t} = useTranslation()
  return (
    <div className={darkMode ? "app dark" : "app"}>
       <Suspense fallback={null}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>} />
            <Route path="sources" >
              <Route index element={<List title={t("datatables.sources")} link="/sources/new"/>}/>
              <Route path=":sourceId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="resources">
              <Route index element={<List title={t("datatables.resources")} link="/resources/new"/>}/>
              <Route path=":resourceId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="group">
              <Route index element={<List title={t("datatables.groupResources")} link="/groupResources/new"/>}/>
              <Route path=":groupId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="statuses" >
              <Route index element={<List title={t("datatables.statuses")} link="/statuses/new"/>}/>
              <Route path=":registerId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
