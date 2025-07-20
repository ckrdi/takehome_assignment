<template>
  <div class="bg-light border-right" id="sidebar">
    <div class="list-group list-group-flush">
      <router-link class="list-group-item list-group-item-action bg-light" to="/">
        Dashboard
      </router-link>
      <router-link class="list-group-item list-group-item-action bg-light" to="/users">
        User Management
      </router-link>
    </div>
  </div>
</template>

<style scoped>
#sidebar {
  height: 100vh;
}
</style>