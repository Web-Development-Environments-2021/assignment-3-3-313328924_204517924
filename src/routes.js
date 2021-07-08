import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [{
        path: "/",
        name: "main",
        component: Main
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import ("./pages/RegisterPage")
    },
    {
        path: "/login",
        name: "login",
        component: () =>
            import ("./pages/LoginPage")
    },
    {
        path: "/About",
        name: "About",
        component: () =>
            import ("./pages/About")
    },
    {
        path: "/search",
        name: "search",
        component: () =>
            import ("./pages/SearchPage")
    },
    {
        path: "/LeagueManagment",
        name: "LeagueManagment",
        component: () =>
            import ("./pages/LeagueManagment")
    },
    {
        path: "/FavoritePage",
        name: "Favorite",
        component: () =>
            import ("./pages/FavoritePage")
    },
    {
        path: "/AddGame",
        name: "AddGame",
        component: () =>
            import ("./pages/AddGame")
    },
    {
        path: "/EditGame",
        name: "EditGame",
        component: () =>
            import ("./pages/EditGame")
    },
    {
        path: "/LeagueFixtures",
        name: "LeagueFixtures",
        component: () =>
            import ("./pages/LeagueFixtures")
    },
    {
        path: "/PlayerCard/:playerId",
        name: "PlayerCard",
        component: () =>
            import ("./pages/PlayerCard")
    },
    {
        path: "/TeamCard/:teamId",
        name: "TeamCard",
        component: () =>
            import ("./pages/TeamCard")
    },
    {
        path: "*",
        name: "notFound",
        component: NotFound
    }
];

export default routes;