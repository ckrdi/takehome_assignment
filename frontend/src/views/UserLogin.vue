<template>
	<div class="container mt-5">
		<h2>Login</h2>
		<form @submit.prevent="login">
			<div class="form-group">
				<label>Email</label>
				<input v-model="email" type="email" class="form-control" required />
			</div>
			<div class="form-group">
				<label>Password</label>
				<input v-model="password" type="password" class="form-control" required />
			</div>
			<button class="btn btn-primary">Login</button>
		</form>
		<p v-if="error" class="text-danger mt-2">{{ error }}</p>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			email: '',
			password: '',
			error: '',
		}
	},
	methods: {
		async login() {
			try {
				this.error = ''
				const res = await axios.post(`${process.env.VUE_APP_API}/login`, {
					email: this.email,
					password: this.password,
				})
				localStorage.setItem('token', res.data.token)
				this.$router.push('/')
			} catch (err) {
				this.error = 'Invalid credentials'
			}
		}
	}
}
</script>
