<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand :to="{ name: 'main' }">Superliga Vue &emsp;<img class="img" src="./assets/whitelogo.png" ></b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
        <b-nav-item :to="{ name: 'About'}">About</b-nav-item>
        <b-nav-item :to="{ name: 'search' }">Search</b-nav-item>
        <b-nav-item :to="{ name: 'LeagueFixtures' }">League Fixture</b-nav-item>
        <!-- add v-if for this option -->
        <b-nav-item  v-if="checkIfAdmin" :to="{ name: 'LeagueManagment' }">League Managment</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-if="!$root.store.username">
          <b-nav-item :to="{ name: 'login' }">Login</b-nav-item>
          <b-nav-item :to="{ name: 'register' }">Register</b-nav-item>
          <b-nav-item ><strong>Hellow Gust</strong></b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto" v-else>
        <b-nav-item-dropdown right>
          <template #button-content>
            <strong>{{$root.store.username}}</strong>
          </template>
          <b-dropdown-item :to="{ name: 'Favorite' }">Favorites</b-dropdown-item>
          <b-dropdown-item href="#" @click="Logout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>
          <b-avatar variant="info" :src="this.$root.store.urlPhoto"></b-avatar>
        </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      imageUrl:""

    }
  },
  computed:{
    checkIfAdmin(){
    if(this.$root.store.username === "AdminUser")
      return true;
      else
        return false;
    },
    // getUrl(){
    //   this.imageUrl = this.$root.store.urlPhoto;
    //   return
    // }
  },
  methods: {
    Logout() {
      try{
        const response = this.axios.post(`${this.$root.store.domain_server}/Logout`);
        this.$root.toast("Logout", "User logged out successfully", "success");
        this.$root.store.logout();
        console.log(this.isAdmin)
      }catch(err){
        console.log(err);
      }

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
      
    },
  }
};
</script>

<style lang="scss">
@import "@/scss/form-style.scss";

#app {
  background-image: url("./assets/fans.jpg"); 
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%; 
 

  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

.main-part{
  background-color: rgba(211, 211, 211, 0.616);
  background-position: center;
  padding: 10px; 
  box-shadow:0px 0px 10px 10px #dbdbdb93;
  border-radius: 5px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.router-container{
  align-items: center;
  }
.img{
  margin: 0;
  width: 40px;
  height: 40px;
}

#__BVID__75{
  align-self: center;
}
</style>
