<template>
	<table class="table table-bordered">
		<thead>
			<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Status</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="user in users" :key="user._id">
				<td>{{ user.name }}</td>
				<td>{{ user.email }}</td>
				<td>{{ user.status }}</td>
				<td>
					<button class="btn btn-primary btn-sm mr-2" @click="$emit('edit', user._id)">Edit</button>
					<button class="btn btn-danger btn-sm" @click="$emit('delete', user._id)">Delete</button>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	props: ['users']
}
</script>
