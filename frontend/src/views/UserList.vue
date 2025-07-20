<template>
	<div class="container mt-5">
		<h2>User List</h2>
		<button class="btn btn-success mb-3" @click="$router.push('/users/add')">Add User</button>
		<UserTable  :users="users" @edit="editUser" @delete="deleteUser" />
	</div>
</template>

<script>
import api from '../services/api'
import UserTable from '../components/UserTable.vue'

export default {
	components: {
		UserTable: UserTable
	},
	data() {
		return {
			users: [],
		}
	},
	async created() {
		const res = await api.get('/users')
		this.users = await res.data
	},
	methods: {
		async deleteUser(id) {
			await api.delete(`/users/${id}`)
			this.users = this.users.filter(u => u._id != id)
		},
		editUser(id) {
			this.$router.push(`/users/${id}`)
		}
	}
}
</script>
