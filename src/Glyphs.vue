<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Component
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon" @click="showGlyphs = !showGlyphs">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </span>
            </a>
        </header>
        <div class="card-content" v-show="showGlyphs">
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
</template>

<script>
export default {
  data: () => {
    return { showGlyphs: false };
  }
};
</script>
<style scoped>
/* .card-content {
  display: none;
}
.visible {
  display: block;
} */
</style>
