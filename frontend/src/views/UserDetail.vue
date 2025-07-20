<template>
	<div class="container mt-5">
		<h2>Edit User</h2>
		<form @submit.prevent="updateUser">
			<div class="form-group">
				<label>Name</label>
				<input v-model="user.name" class="form-control" />
			</div>
			<div class="form-group">
				<label>Email</label>
				<input v-model="user.email" class="form-control" />
			</div>
			<div class="form-group">
				<label>Status</label>
				<input v-model="user.status" class="form-control" />
			</div>
			<button class="btn btn-primary">Update</button>
		</form>
	</div>
</template>

<script>
import api from '../services/api'

export default {
	data() {
		return {
			user: {}
		}
	},
	async created() {
		const res = await api.get(`/users/${this.$route.params.id}`)
		this.user = await res.data
	},
	methods: {
		async updateUser() {
			await api.put(`/users/${this.user?._id}`, this.user)
			this.$router.push('/users')
		}
	}
}
</script>
