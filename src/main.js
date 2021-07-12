import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";

import routes from "./routes";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
    routes
});

import PreviewWrapper from './components/PreviewWrapper.vue';
Vue.component("PreviewWrapper", PreviewWrapper);
import APIGamePreview from './components/APIGamePreview.vue';
Vue.component("APIGamePreview", APIGamePreview);
import PlayerPreview from './components/PlayerPreview';
Vue.component("PlayerPreview", PlayerPreview);
import TeamPreview from './components/TeamPreview.vue';
Vue.component("TeamPreview", TeamPreview);
import GamePreview from './components/GamePreview.vue';
Vue.component("GamePreview", GamePreview);
import AddFavorite from './components/AddFavorite.vue';
Vue.component("AddFavorite", AddFavorite);

import VueCookies from 'vue-cookies';
Vue.use(VueCookies);

import VueResizeText from 'vue-resize-text';
import Vuelidate from "vuelidate";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
    FormGroupPlugin,
    FormPlugin,
    FormInputPlugin,
    ButtonPlugin,
    CardPlugin,
    NavbarPlugin,
    FormSelectPlugin,
    AlertPlugin,
    ToastPlugin,
    LayoutPlugin,
    InputGroupPlugin,
    FormRadioPlugin,
    ImagePlugin,
    ListGroupPlugin,
    ButtonGroupPlugin,
    TablePlugin,
    ModalPlugin,
    AvatarPlugin
} from "bootstrap-vue";
[
    FormGroupPlugin,
    FormPlugin,
    FormInputPlugin,
    ButtonPlugin,
    CardPlugin,
    NavbarPlugin,
    FormSelectPlugin,
    AlertPlugin,
    ToastPlugin,
    LayoutPlugin,
    InputGroupPlugin,
    FormRadioPlugin,
    ImagePlugin,
    ListGroupPlugin,
    ButtonGroupPlugin,
    TablePlugin,
    ModalPlugin,
    AvatarPlugin
].forEach((x) => Vue.use(x));
Vue.use(Vuelidate);
Vue.use(VueResizeText);

axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function(response) {
        // Do something with response data
        return response;
    },
    function(error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const shared_data = {
    domain_server: "http://localhost:3000",
    superLigaTeams: ["Midtjylland",
        "AaB",
        "AGF",
        "Brøndby",
        "København",
        "Midtjylland",
        "Nordsjælland",
        "OB",
        "Randers",
        "Silkeborg",
        "SønderjyskE",
        "Viborg"
    ],

    // username: localStorage.username,
    username: sessionStorage.username,
    urlPhoto: "",
    searchTypes: ["team"], //our app allows search for teams and players

    async login(username, pic) {
        sessionStorage.setItem("username", username);
        this.username = username;
        console.log("login", this.username);
        this.urlPhoto = pic;

    },
    logout() {
        console.log("logout");
        sessionStorage.removeItem("username");
        this.username = undefined;
        // this.urlPhoto = "https://cdn.sportmonks.com/images/soccer/placeholder.png"
        window.localStorage.clear();
        console.log(JSON.parse(localStorage.getItem('manipulated')));
    }
};
// Vue.prototype.$root.store = shared_data;
router.beforeEach((to, from, next) => {
    if (shared_data.username) {
        const cookie = window.$cookies.get('session');
        console.log(cookie);
        if (!cookie) {
            shared_data.logout();
            next({ name: 'main' });
        }
    }
    next();
});


new Vue({
    router,
    data() {
        return {
            store: shared_data
        };
    },
    methods: {
        toast(title, content, variant = null, append = false) {
            this.$bvToast.toast(`${content}`, {
                title: `${title}`,
                toaster: "b-toaster-top-center",
                variant: variant,
                solid: true,
                appendToast: append,
                autoHideDelay: 3000
            });
        }
    },
    render: (h) => h(App)
}).$mount("#app");