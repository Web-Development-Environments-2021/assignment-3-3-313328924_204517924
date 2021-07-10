<template>
  <div class="main-part container">
    <h1 class="title ">Main Page</h1>
    <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col align-h="center"><LeagueInfo></LeagueInfo></b-col>
        <b-col align-h="center">
          <LoginPage v-if="!$root.store.username"></LoginPage>
          <FavoriteGames v-else></FavoriteGames>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LeagueInfo from "../components/LeagueInfo";
import FavoriteGames from "../components/FavoriteGames";
import LoginPage from "../pages/LoginPage";
export default {
  components: {
    LeagueInfo, 
    LoginPage, 
    FavoriteGames
  },
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
.title{
  align-items: center;
  justify-content: center;
  text-align: center;
}
// .container{
  
// }
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;

// -webkit-background-size: contain;
// -moz-background-size: contain;
// -o-background-size: contain;
// background-size: contain;
// }
</style>
