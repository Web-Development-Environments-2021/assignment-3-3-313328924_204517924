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
          <b-avatar variant="info" :src="getUserPhoto"></b-avatar>
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

    }
  },
  computed:{
    checkIfAdmin(){
    if(this.$root.store.username === "AdminUser")
      return true;
      else
        return false;
    },
     getUserPhoto(){
      try{
      const url =  this.axios.get(`${this.$root.store.domain_server}/users/userPhoto`);
      console.log(url.data);
      let res = "https://placekitten.com/300/300";
      return res;
      }catch(err){
        console.log(err);
        let a = "https://cdn.sportmonks.com/images/soccer/placeholder.png";
        return a;
      }
    }
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
  background-image: url("https://scontent.fsdv1-2.fna.fbcdn.net/v/t31.18172-8/23632634_150062109078223_4692784799966569687_o.jpg?_nc_cat=104&ccb=1-3&_nc_sid=973b4a&_nc_ohc=FrdN_oUMqe0AX9SN_HD&_nc_ht=scontent.fsdv1-2.fna&oh=5b6b91b7bf406d857cdc43135b08d578&oe=60EE442C"); 
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 100%; 

  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
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
</style>
