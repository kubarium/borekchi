<template>
  <div class="letter" @mouseover="showController=true" @mouseout="showController=false">
    {{letter.set[letter.index]}}
    <div class="controller" v-show="showController">
      <button class="material-icons">format_list_numbered_rtl</button>
      <button class="material-icons">keyboard_arrow_up</button>
      <button class="material-icons">grain</button>
      <button class="material-icons">keyboard_arrow_left</button>
      <input type="text" value="9999" class="letter-stepper" disabled>
      <button class="material-icons">keyboard_arrow_right</button>
      <button class="material-icons" v-if="letter.disabled" @click="$emit('toggleDisabled',this)" value="true">check_box_outline_blank</button>
      <button class="material-icons" v-else @click="$emit('toggleDisabled',this)" value="false">check_box</button>
      <button class="material-icons">keyboard_arrow_down</button>
      <button class="material-icons">cancel</button>
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
  model: {
    sik: ""
  },
  methods: {},
  props: ["letter"]
};
</script>
<style lang="sass" scoped>
$width: 30px
$height: 30px

.letter
  min-width: $width
  vertical-align: top
  text-align: center
  border: 1px solid rgb(228,225,132)
  display: inline-block
  box-shadow: 3px 3px 5px #cecece 
  background: rgb(248,255,232);
  background: -moz-linear-gradient(top,  rgba(248,255,232,1) 0%, rgba(227,245,171,1) 33%, rgba(183,223,45,1) 100%);
  background: -webkit-linear-gradient(top,  rgba(248,255,232,1) 0%,rgba(227,245,171,1) 33%,rgba(183,223,45,1) 100%);
  background: linear-gradient(to bottom,  rgba(248,255,232,1) 0%,rgba(227,245,171,1) 33%,rgba(183,223,45,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8ffe8', endColorstr='#b7df2d',GradientType=0 );

.letter:not(:first-of-type)
  border-left-width: 0px

.letter:first-of-type
  border-top-left-radius: 3px
  border-bottom-left-radius: 3px

.letter:last-of-type
  border-top-right-radius: 3px
  border-bottom-right-radius: 3px

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

  & button:hover
    background: rgba(227, 245, 171, .8)

.material-icons
  font-size: $width 

</style>
