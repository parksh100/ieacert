<template>
	<div class="container">
		<h3>고객불만 / 이의제기</h3>
		<hr class="my-5" />
		<div class="mt-5 minifooter">
			<!--Section: Contact v.2-->
			<div class="row mb-3 text-center">
				<div class="col" style="font-size: 1rem">접수</div>
				<div class="col d-flex align-items-center justify-content-center">
					<i class="fa-regular fa-circle-right fa-2x"></i>
				</div>
				<div class="col" style="font-size: 1rem">검토</div>
				<div class="col d-flex align-items-center justify-content-center">
					<i class="fa-regular fa-circle-right fa-2x"></i>
				</div>
				<div class="col" style="font-size: 1rem">처리계획</div>
				<div class="col d-flex align-items-center justify-content-center">
					<i class="fa-regular fa-circle-right fa-2x"></i>
				</div>
				<div class="col" style="font-size: 1rem">조치</div>
				<div class="col d-flex align-items-center justify-content-center">
					<i class="fa-regular fa-circle-right fa-2x"></i>
				</div>
				<div class="col" style="font-size: 1rem">계획통보</div>
				<div class="col d-flex align-items-center justify-content-center">
					<i class="fa-regular fa-circle-right fa-2x"></i>
				</div>
				<div class="col" style="font-size: 1rem">결과통보</div>
			</div>
			<hr class="my-5" />
			<section class="mt-5 mb-4">
				<!--Section heading-->

				<div class="row">
					<!--Grid column-->
					<div class="col-md-9 mb-md-0 mb-5">
						<form
							id="contact-form"
							name="contact-form"
							action="https://formsubmit.co/spark616@gmail.com"
							method="POST"
						>
							<!--Grid row-->
							<div class="row">
								<!--Grid column-->
								<div class="col-md-6">
									<div class="form-floating mb-3">
										<input
											type="text"
											class="form-control"
											id="floatingInput"
											placeholder="성명"
											name="name"
										/>
										<label for="floatingInput">성명</label>
									</div>
								</div>
								<!--Grid column-->

								<!--Grid column-->
								<div class="col-md-6">
									<div class="form-floating">
										<input
											type="email"
											class="form-control"
											id="floatingEmail"
											placeholder="email"
											name="email"
										/>
										<label for="floatingEmail">이메일</label>
									</div>
								</div>
								<!--Grid column-->
							</div>
							<!--Grid row-->

							<div class="row">
								<!--Grid column-->
								<div class="col-md-6">
									<div class="form-floating mb-3">
										<input
											type="text"
											class="form-control"
											id="floatingMobile"
											placeholder="휴대폰번호"
											name="mobile"
										/>
										<label for="floatingMobile">휴대폰번호</label>
									</div>
								</div>
								<!--Grid column-->

								<!--Grid column-->
								<div class="col-md-6">
									<div class="form-floating">
										<input
											type="text"
											class="form-control"
											id="floatingPhone"
											placeholder="phone"
											name="phone"
										/>
										<label for="floatingPhone">유선전화</label>
									</div>
								</div>
								<!--Grid column-->
							</div>
							<!--Grid row-->

							<!--Grid row-->
							<div class="row">
								<div class="col-md-12">
									<div class="form-floating">
										<input
											type="text"
											class="form-control"
											id="floatingSubject"
											placeholder="subject"
											name="subject"
										/>
										<label for="floatingSubject">제목</label>
									</div>
								</div>
							</div>
							<!--Grid row-->

							<!--Grid row-->
							<div class="row mt-4">
								<!--Grid column-->
								<div class="col-md-12">
									<div class="form-floating">
										<textarea
											type="text"
											class="form-control"
											id="floatingSubject"
											placeholder="content"
											name="content"
										></textarea>
										<label for="floatingSubject">내용</label>
									</div>
								</div>
							</div>
							<p class="mb-3 mt-3 text-center">
								<button class="btn btn-primary w-20" type="submit">
									보내기
								</button>
							</p>
							<!--Grid row-->
						</form>

					</div>
					<!--Grid column-->

					<!--Grid column-->
					<div class="col-md-3 text-center">
						<ul class="list-unstyled mb-0">
							<li>
								<i class="fas fa-map-marker-alt fa-2x"></i>
								<p>서울특별시 강서구 금낭화로146</p>
							</li>

							<li>
								<i class="fas fa-phone mt-4 fa-2x"></i>
								<p>02-2661-8505</p>
							</li>

							<li>
								<i class="fas fa-envelope mt-4 fa-2x"></i>
								<p>info@ieacert.org</p>
							</li>
						</ul>
					</div>
					<!--Grid column-->
				</div>
			</section>
			<!--Section: Contact v.2-->
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
.col .border {
	border-radius: 100%;
}
</style>
