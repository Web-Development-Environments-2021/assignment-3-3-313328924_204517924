<template>
  <div class="game-preview">
    <div :title="id" class="game-title">
    </div>

  </div>
</template>

<script>
export default {
  name: "GamePreview",
  props: {
      date: {
        type: String,
        required: true
      },
      time: {
        type: String,
        required: true
      },
      homeTeam: {
        type: String,
        required: true
      },
      guestTeam: {
        type: String,
        required: true
      },
      stadium: {
        type: String,
        required: true
      },
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
