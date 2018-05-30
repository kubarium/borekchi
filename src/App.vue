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
                  <a class="button is-primary">
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

            <glyphs :range="384" :assigned="128" name="Latin Extended-A" />
            <glyphs/>
          </div>
          <div class="column">
            <h1 class="title is-6">
              Build your word here
            </h1>
            <div class="letters">
              <letter v-for="(letter,index) in letters" @toggleDisabled="sick" v-bind:letter="letter" :key="index" />
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

export default {
  name: "app",
  methods: {},
  data() {
    return {
      sick: event => {
        console.log(this);
      },
      letters: [
        {
          set: ["a", "b", "c"],
          index: 2
        },
        {
          set: ["1", "2", "3"],
          index: 0,
          disabled: true
        },
        {
          set: ["a", "b", "c"],
          index: 1
        },
        {
          set: ["1", "2", "3"],
          index: 0
        },
        {
          set: ["1", "2", "3"],
          index: 0,
          disabled: true
        },
        {
          set: ["a", "b", "c"],
          index: 2
        },
        {
          set: ["1", "2", "3"],
          index: 0
        }
      ]
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

</style>
