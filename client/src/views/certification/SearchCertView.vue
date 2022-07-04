<template>
	<div class="container">
		<h3>자격조회</h3>
		<hr class="my-5" />
		<div class="mt-5 minifooter">
			<p>
				자격인증번호를 입력하시면 현재 귀하의 자격등록여부와 상태를 조회하실 수
				있습니다.
			</p>
			<div class="mt-5 mb-5 row">
				<label for="inputCertNo" class="col-sm-2 col-form-label"
					>자격번호</label
				>
				<div class="col-sm-10">
					<input
						type="text"
						class="form-control"
						id="inputCertNo"
						v-model.trim="searchNo"
					/>
				</div>
			</div>
			<div class="text-center">
				<button class="btn btn-primary" @click="getList">조회하기</button>
			</div>

			<!-- table -->
			<table class="table table-striped mt-5">
				<thead>
					<tr>
						<!-- <th scope="col-3">ID</th> -->
						<th scope="col-6">성명</th>
						<th scope="col-3">자격상황</th>
						<th scope="col-3">자격번호</th>
						<th scope="col-3">자격스킴</th>
						<th scope="col-3">자격등급</th>
						<th scope="col-3">자격유효기간</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in list" :key="item.cert_issued_id">
						<!-- <td>{{ item.cert_issued_id }}</td> -->
						<td>{{ item.cert_name }}</td>
						<td>{{ item.cert_status }}</td>
						<td>{{ item.cert_no }}</td>
						<td>{{ item.cert_scheme }}</td>
						<td>{{ item.cert_grade }}</td>
						<td>{{ item.cert_duedate }}</td>
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
			list: [],
			searchNo: ''
		}
	},
	setup() {},
	created() {},
	async mounted() {
		// this.list = await this.$get('/api/cert/issue')
	},
	unmounted() {},
	methods: {
		async getList() {
			if (this.searchNo === '') {
				return this.$swal('자격번호를 입력하세요')
			}
			if (this.searchNo.length !== 12) {
				this.$swal('자격번호형식이 올바르지 않습니다.')
				this.searchNo = ''
			}

			const loader = this.$loading.show({ canCancel: false })
			this.list = (
				await this.$post('/api/cert/issue/search', {
					param: `${this.searchNo}`
				})
			).data

			// console.log(this.list)
			loader.hide()
		}
	}
}
</script>
<style scoped>
.minifooter {
	margin-bottom: 150px;
}
</style>
