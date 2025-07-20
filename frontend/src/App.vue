<template>
  <div id="app">
    <NavigationBar v-if="showNavbar" />
    <div class="d-flex flex-1">
      <SideBar v-if="showNavbar" />
      <div class="flex-1">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import SideBar from './components/SideBar.vue'

export default {
  components: {
    NavigationBar,
    SideBar
  },
  computed: {
    showNavbar() {
      return this.$route.path !== '/login';
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.flex-1 {
  flex: 1;
}
</style>
