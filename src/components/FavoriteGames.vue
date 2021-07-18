<template>
  <div><br>
    <b-row align-h="center">
      <h1 align-h="center">Favorite &#10084;&#65039; matches</h1> <br>
          <PreviewWrapper 
          v-if="hasFavorites" 
          tag="div"
          :type="'game'"
          :results="games"
          ></PreviewWrapper>
          <b-alert v-else show>
            <h3>No favorite matches</h3>
          </b-alert>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "FavoriteGames", 
  data() {
    return {
      hasFavorites:true,
      games: []
    };
  },
  async created(){
    try{
      const res = await this.axios.get(`${this.$root.store.domain_server}/users/getFavoriteGames`,
      {withCredentials: true});
      this.games = res.data;
      console.log(this.games);
      if(this.games === " there are no favorites games")
        this.hasFavorites = false;
      else if(this.games.length>=3){
        this.games = this.games.slice(0,3);
      }
      else
        this.games = this.games.slice(0,this.games.length());
      // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      // for (let i = 0; i<this.games.length;i++){
      //   console.log(this.games[i]);
      //   this.games[i].isPreviwe = true;
      //   console.log(this.games[i].isPreviwe)
      // }
      // console.log(this.games);
    }catch(err){

    }
  },
};
</script>

<style></style>
