<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">MEVN App</router-link>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <button class="btn btn-outline-danger" @click="logout">Log Out</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    },
  },
};
</script>
