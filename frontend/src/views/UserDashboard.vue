<template>
	<div class="container mt-5">
		<h2>Dashboard</h2>
		<p>Total Registered Users: {{ userCount }}</p>
	</div>
</template>

<script>
import api from '../services/api'

export default {
	data() {
		return {
			userCount: 0,
		}
	},
	async mounted() {
		const res = await api.get('/users')
		this.userCount = await res.data.length
	}
}
</script>
