import Home from "~/page/Home";
import Following from "~/page/Following";

const publicRoutes = [
    { path:"/", component: Home },
    { path:"/following", component: Following }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes } 