<template>
	<div class="container minifooter">
		<h3>자격인증 등록신청</h3>
		<hr class="my-5" />
		<div class="mt-5 row d-flex justify-content-center">
			<table class="">
				<tr>
					<th scope="col">국문성명</th>
					<td scope="col"><input type="text" class="form-control" /></td>
					<th scope="col">영문성명</th>
					<td scope="col"><input type="text" class="form-control" /></td>
				</tr>
				<tr>
					<th scope="col">휴대폰번호</th>
					<td scope="col"><input type="text" class="form-control" /></td>
					<th scope="col">이메일주소</th>
					<td scope="col"><input type="text" class="form-control" /></td>
				</tr>
				<tr>
					<th scope="col">인증규격</th>
					<td scope="col" colspan="3">
						<div class="col-10">
							<div class="form-check form-check-inline">
								<input
									class="form-check-input"
									type="checkbox"
									id="inlineCheckbox1"
									value="qms"
								/>
								<label class="form-check-label" for="inlineCheckbox1"
									>ISO9001</label
								>
							</div>
							<div class="form-check form-check-inline">
								<input
									class="form-check-input"
									type="checkbox"
									id="inlineCheckbox2"
									value="ems"
								/>
								<label class="form-check-label" for="inlineCheckbox2"
									>ISO14001</label
								>
							</div>
							<div class="form-check form-check-inline">
								<input
									class="form-check-input"
									type="checkbox"
									id="inlineCheckbox3"
									value="ohsms"
								/>
								<label class="form-check-label" for="inlineCheckbox3"
									>ISO45001</label
								>
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th scope="col">인증유형</th>
					<td scope="col" colspan="3">
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio1"
								value="new"
							/>
							<label class="form-check-label" for="inlineRadio1"
								>최초인증</label
							>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio2"
								value="transfer"
							/>
							<label class="form-check-label" for="inlineRadio2"
								>전환인증</label
							>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio3"
								value="renew"
							/>
							<label class="form-check-label" for="inlineRadio3"
								>갱신인증</label
							>
						</div>
					</td>
				</tr>

				<tr>
					<th scope="col">기본주소</th>
					<td scope="col" colspan="3">
						<div class="row">
							<div class="col-3">
								<input
									type="text"
									class="form-control"
									placeholder="우편번호"
									v-model="ZipCode"
									readonly
								/>
							</div>
							<div class="col-9">
								<button
									class="btn btn-secondary btn-sm ms-1"
									@click="showZipCode()"
								>
									우편번호
								</button>
							</div>
						</div>
						<input
							type="text"
							class="form-control mt-1"
							placeholder="기본주소"
							readonly
							v-model="addressKakao"
						/>
						<input
							type="text"
							class="form-control mt-1"
							placeholder="상세주소"
						/>
					</td>
				</tr>

				<tr>
					<th scope="row">신청비</th>
					<td colspan="3" class="fw-bold">
						30,000원
						<span class="fw-light">
							(계좌번호: 기업은행 664-021577-04-011)</span
						>
					</td>
				</tr>
			</table>
			<!-- <div class="row">
				<div class="col-6">
					<div class="row mb-3">
						<div class="col-md-4 text-center">성명(국문)</div>
						<div class="col-md-8">
							<div class="form-check ps-0">
								<input
									type="text"
									class="form-control"
									id="exampleFormControlInput1"
									placeholder="홍길동"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="col-6">
					<div class="row mb-3">
						<div class="col-md-4 text-center">성명(영문)</div>
						<div class="col-md-8">
							<div class="form-check ps-0">
								<input
									type="text"
									class="form-control"
									id="exampleFormControlInput1"
									placeholder="Hong, Gil-dong"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-6">
					<div class="row mb-3">
						<div class="col-md-4 text-center">휴대폰번호</div>
						<div class="col-md-8">
							<div class="form-check ps-0">
								<input
									type="text"
									class="form-control"
									id="exampleFormControlInput1"
									placeholder="010-1234-5678"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="col-6">
					<div class="row mb-3">
						<div class="col-md-4 text-center">이메일주소</div>
						<div class="col-md-8">
							<div class="form-check ps-0">
								<input
									type="email"
									class="form-control"
									id="exampleFormControlInput1"
									placeholder="hgd@gmail.com"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<hr style="width: 50%" />
		신청규격
		<div class="row">
			<div class="col-2 text-center">신청규격</div>
			<div class="col-10">
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						id="inlineCheckbox1"
						value="qms"
					/>
					<label class="form-check-label" for="inlineCheckbox1">ISO9001</label>
				</div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						id="inlineCheckbox2"
						value="ems"
					/>
					<label class="form-check-label" for="inlineCheckbox2">ISO14001</label>
				</div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						id="inlineCheckbox3"
						value="ohsms"
					/>
					<label class="form-check-label" for="inlineCheckbox3">ISO45001</label>
				</div>
			</div>
		</div>

		신청유형
		<div class="row">
			<div class="col-2 text-center">신청규격</div>
			<div class="col-10">
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						id="inlineCheckbox1"
						value="qms"
					/>
					<label class="form-check-label" for="inlineCheckbox1">ISO9001</label>
				</div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						id="inlineCheckbox2"
						value="ems"
					/>
					<label class="form-check-label" for="inlineCheckbox2">ISO14001</label>
				</div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						id="inlineCheckbox3"
						value="ohsms"
					/>
					<label class="form-check-label" for="inlineCheckbox3">ISO45001</label>
				</div>
			</div>
		</div>

		주소 -->
		</div>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			ZipCode: '',
			addressKakao: ''
		}
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		showZipCode() {
			new window.daum.Postcode({
				oncomplete: (data) => {
					console.log(data)
					this.addressKakao = data.address
					this.ZipCode = data.zonecode
				}
			}).open()
			// 우편번호창이 열리고 선택했을때는
		}
	}
}
</script>
<style scoped>
.minifooter {
	margin-bottom: 100px;
}
tr > th {
	text-align: center;
	padding: 1rem;
}
tr {
	border-collapse: collapse;
}
</style>
