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

            <h1 class="title is-6">Letters</h1>

            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Component
                </p>
                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </span>
                </a>
              </header>
              <div class="card-content">
                <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                  <a href="#">@bulmaio</a>.
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
            <div class="card">
              <header class="card-header">
                <p class="card-header-title">
                  Component
                </p>
                <a href="#" class="card-header-icon" aria-label="more options">
                  <span class="icon" @click="previewLetters">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </span>
                </a>
              </header>
              <div class="card-content">
                <div class="content">
                  Dolar gotune girsin Tayyo!
                  <a href="#">@bulmaio</a>.
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>
            </div>
          </div>
          <div class="column">
            Second column
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    previewLetters(event) {
      document.querySelectorAll(".card-content")[1].classList.toggle("visible");
    }
  }
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
.card-content {
  display: none;
}
.visible {
  display: block;
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
