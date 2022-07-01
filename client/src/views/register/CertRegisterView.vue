<template>
	<div class="container minifooter">
		<h3>자격인증 등록신청</h3>
		<hr class="my-5" />
		<div class="row">
			<div class="col-6">
				<div class="mb-3 row">
					<label for="inputKoName" class="col-sm-3 col-form-label fw-bold"
						>국문성명</label
					>
					<div class="col-sm-9">
						<input
							type="text"
							class="form-control"
							id="inputKoName"
							placeholder="홍길동"
							v-model.trim="applier.name_kor"
						/>
					</div>
				</div>
			</div>
			<div class="col-6">
				<div class="mb-3 row">
					<label for="inputEnName" class="col-sm-3 col-form-label fw-bold"
						>영문성명</label
					>
					<div class="col-sm-9">
						<input
							type="text"
							class="form-control"
							placeholder="Hong, Gil-dong"
							id="inputEnName"
							v-model.trim="applier.name_eng"
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-6">
				<div class="mb-3 row">
					<label for="mobile" class="col-sm-3 col-form-label fw-bold"
						>휴대폰번호</label
					>
					<div class="col-sm-9">
						<input
							type="text"
							class="form-control"
							id="mobile"
							v-model.trim="applier.mobile"
						/>
					</div>
				</div>
			</div>
			<div class="col-6">
				<div class="mb-3 row">
					<label for="email" class="col-sm-3 col-form-label fw-bold"
						>이메일주소</label
					>
					<div class="col-sm-9">
						<input
							type="email"
							class="form-control"
							id="email"
							v-model.trim="applier.email"
						/>
					</div>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-6">
				<div class="mb-3 row">
					<label for="scheme" class="col-sm-3 col-form-label fw-bold"
						>인증규격</label
					>
					<div class="col-sm-9">
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="checkbox"
								id="qms"
								value="qms"
								v-model="cert_spec"
							/>
							<label class="form-check-label" for="qms">ISO9001</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="checkbox"
								id="ems"
								value="ems"
								v-model="cert_spec"
							/>
							<label class="form-check-label" for="ems">ISO14001</label>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								type="checkbox"
								id="ohsms"
								value="ohsms"
								v-model="cert_spec"
							/>
							<label class="form-check-label" for="ohsms">ISO45001</label>
						</div>
					</div>
				</div>
			</div>

			<!-- 인증유형 -->
			<div class="col-6">
				<div class="mb-3 row">
					<label for="type" class="col-sm-3 col-form-label fw-bold"
						>인증유형</label
					>
					<div class="col-sm-9">
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								name="inlineRadioOptions"
								id="inlineRadio1"
								type="radio"
								value="NewCert"
								v-model="applier.type_cert"
							/>
							<label class="form-check-label" for="inlineRadio1"
								>최초인증</label
							>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								name="inlineRadioOptions"
								id="inlineRadio2"
								type="radio"
								value="Transfer"
								v-model="applier.type_cert"
							/>
							<label class="form-check-label" for="inlineRadio2"
								>전환인증</label
							>
						</div>
						<div class="form-check form-check-inline">
							<input
								class="form-check-input"
								id="inlineRadio3"
								name="inlineRadioOptions"
								type="radio"
								value="Renewal"
								v-model="applier.type_cert"
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
					<label for="phone" class="col-sm-3 col-form-label fw-bold"
						>기본주소</label
					>
					<div class="col-sm-3">
						<input
							type="text"
							class="form-control"
							id=""
							v-model="applier.postcode"
							readonly
						/>
					</div>
					<div class="col-sm-4">
						<button class="btn btn-secondary" @click="showZipCode">
							우편번호찾기
						</button>
					</div>
				</div>
			</div>
			<div class="col-6">
				<div class="mb-3 row"></div>
			</div>

			<div class="col-7 ps-5">
				<div class="mb-3 row">
					<label for="address" class="col-sm-2 col-form-label fw-bold"></label>
					<div class="col-sm-10">
						<input
							type="text"
							class="form-control"
							id="address"
							placeholder="기본주소"
							v-model="applier.applier_address"
						/>
					</div>
				</div>
			</div>
			<div class="col-5">
				<div class="mb-3 row">
					<div class="col-sm-12, col-md-9">
						<input
							type="email"
							class="form-control"
							id="email"
							placeholder="상세주소"
							v-model="applier.detail_address"
						/>
					</div>
				</div>
			</div>
		</div>

		<!-- 신청비안내 -->
		<div class="row">
			<div class="col-6">
				<div class="mb-3 row">
					<label for="phone" class="col-sm-3 col-form-label fw-bold"
						>신청비</label
					>
					<div class="col-sm-9">
						<h6 class="pt-2">30,000원<span></span></h6>
					</div>
				</div>
			</div>
			<div class="col-6">
				<div class="mb-3 row">
					<label for="" class="col-sm-3 col-form-label fw-bold"></label>
					<div class="col-sm-9">
						<!-- <input type="email" class="form-control" id="email" /> -->
					</div>
				</div>
			</div>
		</div>

		<!-- 첨부서류 -->
		<div class="row">
			<div class="col-5">
				<div class="mb-3 row">
					<label for="phone" class="col-sm-3 col-form-label fw-bold"
						>첨부서류</label
					>
					<div class="col-sm-9 text-center mt-2">이력서</div>
				</div>
			</div>
			<div class="col-7">
				<div class="mb-3">
					<input
						class="form-control"
						type="file"
						id="career"
						accept="application/pdf"
						@change="uploadFile($event.target.files)"
					/>
				</div>
			</div>
			<div class="col-5">
				<div class="mb-3 row">
					<label for="phone" class="col-sm-3 col-form-label fw-bold"
						>첨부서류</label
					>
					<div class="col-sm-9 text-center mt-2">경력증명서</div>
				</div>
			</div>
			<div class="col-7">
				<div class="mb-3">
					<input
						class="form-control"
						type="file"
						id="careerRef"
						accept="application/pdf"
					/>
				</div>
			</div>

			<div class="col-5">
				<div class="mb-3 row">
					<label for="phone" class="col-sm-3 col-form-label fw-bold"
						>첨부서류</label
					>
					<div class="col-sm-9 text-center mt-2">합격증</div>
				</div>
			</div>
			<div class="col-7">
				<div class="mb-3">
					<input
						class="form-control"
						type="file"
						id="testCert"
						accept="application/pdf"
					/>
				</div>
			</div>

			<div class="col-5">
				<div class="mb-3 row">
					<label for="phone" class="col-sm-3 col-form-label fw-bold"
						>첨부서류</label
					>
					<div class="col-sm-9 text-center mt-2">심사로그</div>
				</div>
			</div>
			<div class="col-7">
				<div class="mb-3">
					<input
						class="form-control"
						type="file"
						id="testCert"
						accept="application/pdf"
					/>
				</div>
			</div>
			<p class="text-end">pdf파일만 업로드 가능합니다</p>

			<!-- 제출버튼 -->
			<div class="text-center mt-5">
				<button type="button" class="btn btn-primary btn-lg" @click="doSave()">
					신청하기
				</button>
				<button type="button" class="btn btn-secondary btn-lg ms-4">
					취소하기
				</button>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	components: {},
	data() {
		return {
			extraRoadAddr: '',
			cert_spec: [],
			applier: {
				name_kor: '',
				name_eng: '',
				mobile: '',
				email: '',
				// scheme: [],
				type_cert: '',
				applier_address: '',
				postcode: '',
				detail_address: '',
				career: '',
				career_evidence: '',
				career_cert: '',
				logsheet: ''
			}
		}
	},
	setup() {},
	created() {},
	mounted() {},
	unmounted() {},
	methods: {
		async uploadFile(files) {
			const r = await this.$upload('api/upload/file', files[0])
			console.log(r)
			this.applier.career = r.filename
		},

		showZipCode() {
			new window.daum.Postcode({
				oncomplete: (data) => {
					console.log(data)
					this.applier.applier_address = data.address
					// this.addressKakao = data.address
					this.applier.postcode = data.zonecode
					this.extraRoadAddr = data.bname
					if ((data.buildingName !== '') & (data.apartment === 'Y')) {
						this.applier.applier_address =
							this.addressKakao + '(' + data.buildingName + ')'
					}
				}
			}).open()
		},
		async doSave() {
			if (this.applier.name_kor === '') {
				return this.$swal('한글성명을 입력하세요')
			}
			if (this.applier.name_eng === '') {
				return this.$swal('영문성명을 입력하세요')
			}

			this.$swal({
				title: '등록을 신청하시겠습니까?',
				// text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				cancelButtonText: '취소',
				confirmButtonText: '저장'
			}).then(async (result) => {
				if (result.isConfirmed) {
					const loader = this.$loading.show({ canCancel: false })

					const r = await this.$post('http://localhost:3000/api/applier', {
						param: this.applier
					})

					loader.hide()

					console.log(r)

					if (r.status === 200) {
						this.$swal('신청정보가 정상적으로 제출되었습니다.')
						// this.$router.push({
						// path: '/supplier/detail',
						// query: { supplier_id: r.data.insertId }
						// })
					}
					this.applier = {
						name_kor: '',
						name_eng: '',
						mobile: '',
						email: '',
						// scheme: [],
						type_cert: '',
						applier_address: '',
						postcode: '',
						detail_address: '',
						career: '',
						career_evidence: '',
						career_cert: '',
						logsheet: ''
					}
				}
			})
		}
	}
}
</script>

<style scoped>
.minifooter {
	margin-bottom: 100px;
}
</style>
