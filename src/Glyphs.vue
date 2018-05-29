<template>
  <div class="card">
    <header class="card-header" @click="showGlyphs = !showGlyphs">
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
        <span v-for="index in assigned" :key="range+index" v-html="`&#x${range - 1 +index}`" :title="range - 1 +index"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.range);
  },
  props: { name, range: { type: Number }, assigned: { type: Number } },
  data: () => {
    return { showGlyphs: false };
  },
  methods: {
    /* previewGlyphs() {
      this.showGlyphs = !this.showGlyphs;
    } */
  },
  computed: {}
};
</script>
<style scoped>
header {
  cursor: pointer;
}
.content {
  display: grid;
  grid-template-columns: repeat(auto-fill, 21px);
}
.content span {
  outline: 1px dotted #ebebeb;
}
.content span:hover {
  background: #ebebeb;
  cursor: default;
}
</style>
