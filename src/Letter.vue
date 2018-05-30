<template>
  <div class="letter" @mouseover="showController=true" @mouseout="showController=false">
    {{set[index]}}
    <div class="controller" v-show="showController">
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
  data: () => {
    return {
      showController: false
    };
  },
  props: { set: { type: Array }, index: { type: Number } }
};
</script>
<style lang="sass" scoped>
$width: 30px;
$height: 30px;

.letter
  min-width: $width
  vertical-align: top
  text-align: center
  border: 1px solid #cecece
  border-top: 0
  border-left: 0
  display: inline-block
  box-shadow: 1px 1px #cecece
  background: rgb(254, 255, 255)
  background: -moz-linear-gradient(top,rgba(254, 255, 255, 1) 0%,rgba(210, 235, 249, 1) 100%)
  background: -webkit-linear-gradient(top,rgba(254, 255, 255, 1) 0%,rgba(210, 235, 249, 1) 100%)
  background: linear-gradient(to bottom,rgba(254, 255, 255, 1) 0%,rgba(210, 235, 249, 1) 100%)
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffff', endColorstr='#d2ebf9',GradientType=0 )

.controller 
  display: grid
  grid-template-columns: repeat(3, $width)
  grid-template-columns: repeat(3, $height)
  background-color: white
  border-radius: 2px
  border: 1px solid #dbdbdb
  width: $width*3
  height: $height*3

  & input 
    width: $width
    height: $height
    text-align: center
    border: none
    box-sizing: border-box
    background-color: white
    outline: 0

  & button 
    text-align: center
    width: $width
    height: $height
    margin: 0
    padding: 0
    border: none
    background: none

.material-icons
  font-family: "Material Icons"
  font-weight: normal
  font-style: normal
  font-size: $width 
  display: inline-block
  line-height: 1
  text-transform: none
  letter-spacing: normal
  word-wrap: normal
  white-space: nowrap
  direction: ltr
  -webkit-font-smoothing: antialiased
  text-rendering: optimizeLegibility
  -moz-osx-font-smoothing: grayscale
  font-feature-settings: "liga"
  
</style>
