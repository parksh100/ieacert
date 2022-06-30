<template>
	<div class="container">
		<h3>등록수수료</h3>
		<hr class="my-5" />
		<div class="mt-5 minifooter">
			<table class="table text-center">
				<thead>
					<tr>
						<th scope="col">구분</th>
						<th scope="col">심사원</th>
						<th scope="col">선임심사원</th>
						<th scope="col">검증심사원</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">신청비</th>
						<td>30,000원</td>
						<td>30,000원</td>
						<td>30,000원</td>
					</tr>
					<tr>
						<th scope="row">연회비</th>
						<td>120,000원</td>
						<td>150,000원</td>
						<td>180,000원</td>
					</tr>
					<tr>
						<th scope="row">갱신등록비</th>
						<td>120,000원</td>
						<td>150,000원</td>
						<td>180,000원</td>
					</tr>
					<tr>
						<th scope="row">자격승급비</th>
						<td colspan="3" class="text-center">30,000원</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			sampleData: ''
		}
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {}
}
</script>
<style scoped>
.minifooter {
	margin-bottom: 150px;
}
</style>
