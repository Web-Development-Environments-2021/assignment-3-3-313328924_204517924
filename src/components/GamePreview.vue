<template>
  <div class="game-preview">
    <div :title="id" class="game-title">
      <b>Game Id:</b> {{ id }}
    </div>
    <!-- <b-card-group deck> -->
      <!-- <b-card header="Card with list group"> -->
        <b-list-group>
          <b-list-group-item >host: {{ hostTeam }}</b-list-group-item> <br>
          <b-list-group-item >guest: {{ guestTeam }}</b-list-group-item><br>
          <b-list-group-item >date: {{ date }}</b-list-group-item><br>
          <b-list-group-item >time: {{ hour }}</b-list-group-item><br>
        </b-list-group>
      <!-- </b-card> -->
    <!-- </b-card-group> -->
  </div>
</template>

<script>
export default {
  name: "GamePreview",
  props: {
      id: {
        type: Number,
        required: true
      },
      hostTeam: {
        type: String,
        required: true
      },
      guestTeam: {
        type: String,
        required: true
      },
      date: {
        type: String,
        required: true
      },
      hour: {
        type: String,
        required: true
      }
  }, 
  mounted(){
    console.log("game preview mounted")
  } 
};
</script>

<style>
.game-preview {
  display: inline-block;
  width: 250px;
  height: 300px;
  position: relative;
  margin: 10px 10px;
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  border-color:cadetblue;
}

.game-preview .game-title {
  text-align: center;
  text-transform: uppercase;
  color:  rgb(111, 197, 157);
}

.game-preview .game-content {
  width: 100%;
  overflow: hidden;
}



</style>
