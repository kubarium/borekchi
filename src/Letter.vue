<template>
  <div class="letter" @mouseover="showController=true" @mouseout="showController=false">
    {{letter.set[letter.index]}}
    <div class="controller" v-show="showController">
      <button class="material-icons">format_list_numbered_rtl</button>
      <button class="material-icons" @dblclick.prevent="changeStepperValue" @mousedown="changeStepperValue" @mouseout="fixStepperValue" @mouseup="fixStepperValue" value="1">keyboard_arrow_up</button>
      <button class="material-icons">grain</button>
      <button class="material-icons" @click="changeIndex" value="decrement">keyboard_arrow_left</button>
      <input type="text" :value="stepperValue" class="letter-stepper" disabled>
      <button class="material-icons" @click="changeIndex" value="increment">keyboard_arrow_right</button>
      <button class="material-icons" v-if="letter.disabled" @click="toggleDisabled" value="true">check_box_outline_blank</button>
      <button class="material-icons" v-else @click="toggleDisabled" value="false">check_box</button>
      <button class="material-icons" @dblclick.prevent="changeStepperValue" @mousedown="changeStepperValue" @mouseout="fixStepperValue" @mouseup="fixStepperValue" value="-1">keyboard_arrow_down</button>
      <button class="material-icons">cancel</button>
    </div>

  </div>

</template>

<script>
import { eventBus } from "./main";

export default {
  data: () => {
    return {
      stepperInterval: null,
      stepperValue: 1,
      showController: false
    };
  },
  methods: {
    changeIndex(event) {
      eventBus.$emit("changeIndex", {
        letter: this,
        index:
          event.target.value === "increment"
            ? this.stepperValue
            : -this.stepperValue
      });
    },
    changeStepperValue(event) {
      const changeValue = () => {
        console.log(
          this.letter.set.length % (this.stepperValue + +event.target.value)
        );
      };
      if (event.type === "dblclick") {
        return changeValue();
      }

      if (this.stepperInterval === null) {
        this.stepperInterval = setInterval(changeValue, 80);
      }
    },
    fixStepperValue(event) {
      clearInterval(this.stepperInterval);
      this.stepperInterval = null;
    },
    toggleDisabled(event) {
      eventBus.$emit("toggleDisabled", this.$vnode.key);
    }
  },
  props: { letter: Object }
};
</script>
<style lang="sass" scoped>
$width: 35px
$height: 35px
$radius: 4px

.letter
  min-width: $width
  vertical-align: top
  text-align: center
  border: 1px solid rgb(228,225,132)
  display: inline-block
  box-shadow: 3px 3px 5px #cecece 
  background: rgb(248,255,232)
  background: -moz-linear-gradient(top,  rgba(248,255,232,1) 0%, rgba(227,245,171,1) 33%, rgba(183,223,45,1) 100%)
  background: -webkit-linear-gradient(top,  rgba(248,255,232,1) 0%,rgba(227,245,171,1) 33%,rgba(183,223,45,1) 100%)
  background: linear-gradient(to bottom,  rgba(248,255,232,1) 0%,rgba(227,245,171,1) 33%,rgba(183,223,45,1) 100%)
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f8ffe8', endColorstr='#b7df2d',GradientType=0 )

.letter:not(:first-of-type)
  border-left-width: 0px

.letter:first-of-type
  border-top-left-radius: $radius
  border-bottom-left-radius: $radius

.letter:last-of-type
  border-top-right-radius: $radius
  border-bottom-right-radius: $radius

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
