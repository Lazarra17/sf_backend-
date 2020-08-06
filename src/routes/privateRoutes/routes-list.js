import TvShows from "../../pages/TvShows";
import MyList from "../../pages/MyList";
import Movies from "../../pages/Movies";
import Profile from "../../pages/Profile";

const AdminRoutes = [
  { exact: true, name: "Home", path: "/", component: Movies },
  { exact: true, name: "Home", path: "/home", component: Movies },
  { exact: true, name: "TvShows", path: "/tv-shows", component: TvShows },
  { exact: true, name: "MyList", path: "/my-list", component: MyList },
  { exact: true, name: "Movies", path: "/movies", component: Movies },
  { exact: true, name: "Profile", path: "/profile", component: Profile },
];

export default AdminRoutes;
