import home from "../pages/frontend/home";
import Detail from "../pages/frontend/product/Detail";

const RouterPublic=[
    {path:'/',component:home},
    {path:'/san-pham',component:home},
    {path:'/chi-tiet-san-pham/:slug',component:Detail},
];

export default RouterPublic;