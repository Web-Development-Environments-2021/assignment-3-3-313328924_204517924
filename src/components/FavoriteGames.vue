<template>
  <div><br>
    <b-row align-h="center">
      <h1 align-h="center">Favorite &#10084;&#65039; matchs</h1>
          <PreviewWrapper 
          v-if="hasFavorites" 
          :type="'game'"
          :results="games"
          ></PreviewWrapper>
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
      const res = await this.axios.get(`${this.$root.store.domain_server}/users/getFavoritesGames`,
      {withCredentials: true});
      this.games = res.data;
      console.log(this.games);
      if(this.games.length()===0)
        this.hasFavorites = false;
      else if(this.games.length()>=3)
        this.games = this.games.slice(0,3);
      else
        this.games = this.games.slice(0,this.games.length());
    }catch(err){

    }
  },
};
</script>

<style></style>
