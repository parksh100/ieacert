<template>
	<div class="container">
		<h3>부정심사원 고발</h3>
		<hr class="my-5" />
		<div class="mt-5 minifooter">
			<!--Section: Contact v.2-->
			<section class="mb-4">
				<!--Section heading-->
				<!-- <h2 class="h1-responsive font-weight-bold text-center my-4">
					부정심사원 고발
				</h2> -->
				<!--Section description-->
				<p class="w-responsive mx-auto mb-5">
					심사과정 및 심사결과에 부당한 대우를 받았거나 부정한 요청을 받았다면
					IEA에 알려주십시오. IEA는 어떠한 부정도 허용하지 않습니다.
				</p>

				<div class="row">
					<!--Grid column-->
					<div class="col-md-9 mb-md-0 mb-5">
						<form id="contact-form" name="contact-form" action="" method="POST">
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
										/>
										<label for="floatingMobile">휴대폰번호</label>
									</div>
								</div>
								<!--Grid column-->

								<!--Grid column-->
								<div class="col-md-6">
									<div class="form-floating">
										<input
											type="email"
											class="form-control"
											id="floatingPhone"
											placeholder="phone"
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
											placeholder="subject"
										></textarea>
										<label for="floatingSubject">내용</label>
									</div>
								</div>
							</div>
							<!--Grid row-->
						</form>

						<div class="text-center text-md-left mt-4">
							<a class="btn btn-primary">보내기</a>
						</div>
						<div class="status"></div>
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
</style>
