<template>
  <div class="card">
    <header class="card-header" @click="showGlyphs = !showGlyphs" :class="{expanded:showGlyphs}">
      <p class="card-header-title">
        {{name}}
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon" v-show="!showGlyphs" key="right">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span>
        <span class="icon" v-show="showGlyphs" key="left">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content" v-show="showGlyphs">
      <div class="content has-text-centered">
        <span v-for="index in assigned" :key="range+index" v-html="`&#x${(parseInt(range,16) - 1 +index).toString(16)}`" :title="range - 1 +index"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.range);
  },
  props: { name, range: String, assigned: Number },
  data: () => {
    return { showGlyphs: true };
  },
  methods: {
    /* previewGlyphs() {
      this.showGlyphs = !this.showGlyphs;
    } */
  },
  computed: {}
};
</script>
<style lang="sass" scoped>

header 
  cursor: pointer

  &.expanded
    background: #f7f7f7

.card-header-icon
  padding: .35rem

.content 
  display: grid
  grid-template-columns: repeat(auto-fill, 21px)

  & span 
    outline: 1px dotted #ebebeb

  & span:hover 
    background: #ebebeb
    cursor: default
</style>
