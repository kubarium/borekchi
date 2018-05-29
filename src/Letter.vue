<template>
  <div class="letter">
    {{set[index]}}
    <div class="controller">
      <button class="material-icons">grain</button>
      <button class="material-icons">keyboard_arrow_up</button>
      <button>
        <icon name="check-square-o" />
      </button>
      <button class="material-icons">keyboard_arrow_left</button>
      <input type="text" value="99" class="letter-stepper" disabled>
      <button class="material-icons">keyboard_arrow_right</button>
      <button>@</button>
      <button class="material-icons">keyboard_arrow_down</button>
    </div>

  </div>

</template>

<script>
export default {
  props: { set: { type: Array }, index: { type: Number } }
};
</script>

<style scoped>
.message {
  display: inline-block;
}
.letter {
  width: 130px;
  text-align: center;
  border: 1px solid #cecece;
  border-top: 0;
  border-left: 0;
  display: inline-block;
  box-shadow: 1px 1px #cecece;
  background: rgb(254, 255, 255);
  background: -moz-linear-gradient(top, rgba(254, 255, 255, 1) 0%, rgba(210, 235, 249, 1) 100%);
  background: -webkit-linear-gradient(top, rgba(254, 255, 255, 1) 0%, rgba(210, 235, 249, 1) 100%);
  background: linear-gradient(to bottom, rgba(254, 255, 255, 1) 0%, rgba(210, 235, 249, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffff', endColorstr='#d2ebf9',GradientType=0 );
}
.controller {
  display: grid;
  grid-template-columns: repeat(3, 21px);
  grid-template-columns: repeat(3, 21px);

  /*
    grid-template-areas:"button button button"
                        "button input button"
                        "button button button";
    */

  background-color: white;
  border-radius: 2px;
  border: 1px solid #dbdbdb;
  width: 63px;
  height: 63px;
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 21px; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
}
.controller input {
  width: 21px;
  height: 21px;
  text-align: center;
  border: none;
  box-sizing: border-box;
  background-color: white;
  outline: 0;
}

.controller button {
  text-align: center;
  width: 21px;
  height: 21px;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
}
</style>
