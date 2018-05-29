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
            <letter v-for="(letter,index) in letters" :set="letter.set" :index="letter.index" :key="index" />
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
  data() {
    return {
      letters: [
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

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 10px auto;
  color: #2c3e50;
}
.section {
}
.column {
}
.panel-tabs {
  overflow-x: auto;
}
/*

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
