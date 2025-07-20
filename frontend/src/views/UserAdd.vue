<template>
  <div class="container mt-5">
		<h2>Add User</h2>
		<form @submit.prevent="createUser">
			<div class="form-group">
				<label>Name</label>
				<input v-model="user.name" class="form-control" required />
			</div>
			<div class="form-group">
				<label>Email</label>
				<input v-model="user.email" type="email" class="form-control" required />
			</div>
			<div class="form-group">
				<label>Status</label>
				<input v-model="user.status" class="form-control" required />
			</div>
			<div class="form-group">
				<label>Password</label>
				<input v-model="user.password" type="password" required class="form-control" />
			</div>
			<button class="btn btn-primary">Save</button>
		</form>
	</div>
</template>

<script>
import api from '../services/api'

export default {
  data() {
    return {
      user: {
				name: '',
				email: '',
				status: '',
				password: ''
			}
    }
  },
	methods: {
		async createUser() {
			const newUser = {
				name: this.user.name,
				email: this.user.email,
				status: this.user.status,
				password: this.user.password,
			}
			await api.post('/users', newUser)
			this.$router.push('/users')
		}
	}
}
</script>