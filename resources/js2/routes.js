import Index from "./views/User/Index";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    //icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/user"
  }
];

export default routes;
