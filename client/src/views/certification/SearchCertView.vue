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
					<input type="text" class="form-control" id="inputCertNo" />
				</div>
			</div>
			<div class="text-center">
				<button class="btn btn-primary" @click="getList()">조회하기</button>
			</div>

			<!-- table -->
			<table class="table table-striped d-none">
				<thead>
					<tr>
						<th scope="col-3">구분</th>
						<th scope="col-6">내용</th>
						<th scope="col-3">비고</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">성 명</th>
						<td>박성훈</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row">자격상황</th>
						<td>정상</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row">자격번호</th>
						<td>IEA-01-1111</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row">자격스킴</th>
						<td>ISO9001; ISO14001</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row">자격등급</th>
						<td>선임심사원</td>
						<td></td>
					</tr>
					<tr>
						<th scope="row">자격만료일</th>
						<td>2022년 12월 31일</td>
						<td></td>
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
			list: []
		}
	},
	setup() {},
	created() {},
	async mounted() {
		this.list = await this.$get('/api/applier')
	},
	unmounted() {},
	methods: {
		async getList() {
			const loader = this.$loading.show({ canCancel: false })
			this.list = (await this.$get('/api/applier')).data

			console.log(this.list)
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
