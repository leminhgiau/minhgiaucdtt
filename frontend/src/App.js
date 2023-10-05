import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutAdmin from "./layouts/LayoutAdmin";
import RouterPublic from "./router/RouterPublic";
import LayoutSite from "./layouts/LayoutSite/Home";

import RouterSite from "./router";
import "./assets/sass/app.scss";
function App() {
  return (
      <Routes>
        <Route path="/" element={<LayoutSite />}>
          {RouterSite.RouterPublic.map(function(route,index){
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page/>}/>
          })}
        </Route>
        <Route path='/admin' element={<LayoutAdmin />}>
          {RouterSite.RouterPrivate.map(function (route, index) {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Route>
      </Routes>
  );
}

  export default App;