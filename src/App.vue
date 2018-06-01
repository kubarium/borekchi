<template>
  <div id="app" class="container">

    <header>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div>
            <h1 class="title is-4">Borekchi</h1>
            <h2 class="subtitle is-6">A word with you</h2>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="button is-primary" @click="$emit('addLetter')">
                    <span>Add Letter</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section class="section">

        <div class="columns">
          <div class="column is-one-quarter">

            <h1 class="title is-6">Glyphs</h1>

            <glyphs range="0x100" :assigned="128" name="Latin Extended-A" />
            <glyphs range="0x180" :assigned="208" name="Latin Extended-B" />
            <glyphs range="0x1E00" :assigned="256" name="Latin Extended Additional" />
          </div>
          <div class="column">
            <h1 class="title is-6">
              Build your word here
            </h1>
            <div class="letters" @dragover.prevent="$emit('dragover','dragover')" @drop.prevent="$emit('drop',this)">asd
              <letter v-for="(letter,index) in letters" :letter="letter" :key="index" />
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Glyphs from "./Glyphs";
import Letter from "./Letter";
import { eventBus } from "./main";

export default {
  name: "app",
  methods: {},
  created() {
    this.$on("dragover", event => console.log(event));
    this.$on("drop", event => console.log(event));
    //    this.$on("addLetter", toggle => console.log("kokuyorsun ulan"));

    eventBus.$on("toggleDisabled", toggle => (this.letters[toggle].disabled = !this.letters[toggle].disabled));
    eventBus.$on("changeIndex", data => (this.letters[data.letter.$vnode.key].index = data.index));
  },
  data() {
    return {
      letters: []
    };
  },
  components: {
    Glyphs,
    Letter
  },
  methods: {}
};
</script>

<style lang="sass">
#app 
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  margin: 10px auto
  color: #2c3e50

.panel-tabs 
  overflow-x: auto

.letters
  outline: 1px solid red
  min-height: 100%

</style>
