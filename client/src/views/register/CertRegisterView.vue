<template>
	<div class="container minifooter">
		<h3>자격인증 등록신청</h3>
		<hr class="my-5" />
		<div class="row">
			<div class="col-6">
				<div class="mb-3 row">
					<label for="inputKoName" class="col-sm-2 col-form-label fw-bold"
						>국문성명</label
					>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="inputKoName" />
					</div>
				</div>
			</div>
			<div class="col-6">
				<div class="mb-3 row">
					<label for="inputEnName" class="col-sm-2 col-form-label fw-bold"
						>영문성명</label
					>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="inputEnName" />
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-6">
				<div class="mb-3 row">
					<label for="phone" class="col-sm-2 col-form-label fw-bold"
						>휴대폰번호</label
					>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="phone" />
					</div>
				</div>
			</div>
			<div class="col-6">
				<div class="mb-3 row">
					<label for="email" class="col-sm-2 col-form-label fw-bold"
						>이메일주소</label
					>
					<div class="col-sm-10">
						<input type="email" class="form-control" id="email" />
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-6">
				<div class="mb-3 row">
					<label for="scheme" class="col-sm-2 col-form-label fw-bold"
						>인증규격</label
					>
					<div class="col-sm-10">
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
				</div>
			</div>
			<div class="col-6">
				<div class="mb-3 row">
					<label for="type" class="col-sm-2 col-form-label fw-bold"
						>인증유형</label
					>
					<div class="col-sm-10">
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
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-6">
				<div class="mb-3 row">
					<label for="phone" class="col-sm-2 col-form-label fw-bold"
						>기본주소</label
					>
					<div class="col-sm-3">
						<input type="text" class="form-control" id="" readonly />
					</div>
					<div class="col-sm-3">
						<button class="btn btn-secondary">우편번호</button>
					</div>
				</div>
			</div>
			<div class="col-6">
				<div class="mb-3 row">
					<label for="email" class="col-sm-2 col-form-label fw-bold"
						>이메일주소</label
					>
					<div class="col-sm-10">
						<input type="email" class="form-control" id="email" />
					</div>
				</div>
			</div>
		</div>

		<!-- <div class="mt-5 row p-auto" id="main-content">
			<div class="d-flex justify-content-center">
				<div>
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

					<tr>
						<th scope="row" rowspan="4">제출자료</th>
						<td class="text-center">졸업증명서</td>
						<td colspan="2" class="fw-bold">
							<div class="mb-3">
								<input class="form-control" type="file" id="education" />
							</div>
						</td>
					</tr>
					<tr>
						<td class="text-center">이력서</td>
						<td colspan="2" class="fw-bold">
							<div class="mb-3">
								<input class="form-control" type="file" id="career" />
							</div>
						</td>
					</tr>
					<tr>
						<td class="text-center">경력기술서</td>
						<td colspan="2" class="fw-bold">
							<div class="mb-3">
								<input class="form-control" type="file" id="jobDescription" />
							</div>
						</td>
					</tr>
					<tr>
						<td class="text-center">경력증명서</td>
						<td colspan="2" class="fw-bold">
							<div class="mb-3">
								<input class="form-control" type="file" id="careerEvidence" />
							</div>
						</td>
					</tr>
				</div>
			</div>
		</div> -->
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
</style>
