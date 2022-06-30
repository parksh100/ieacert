<template>
	<div class="container">
		<h3>자격인증 프로세스</h3>
		<hr class="my-5" />
		<div class="mt-5 minifooter">
			<div class="row align-items-center">
				<div class="col-4 text-center">
					<h4>시험공고</h4>
				</div>
				<div class="col-8">
					<p>
						시험공고는 시험 실시 전 홈페이지에 공지됩니다. 공지된 일정을
						참고하여 원하는 일정에 응시하십시오.
					</p>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-4">
					<i class="fa-solid fa-circle-chevron-down fa-2x"></i>
				</div>
				<div class="col-8"></div>
			</div>
			<div class="row align-items-center">
				<div class="col-4 text-center">
					<h4>시험실시</h4>
				</div>
				<div class="col-8">
					<p>자격 분야별 일정에 따라 공지된 시험장에서만 실시합니다.</p>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-4">
					<i class="fa-solid fa-circle-chevron-down fa-2x"></i>
				</div>
				<div class="col-8"></div>
			</div>
			<div class="row align-items-center">
				<div class="col-4 text-center">
					<h4>결과</h4>
				</div>
				<div class="col-8">
					<p>시험 결과는 15일 이내에 공지됩니다.</p>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-4">
					<i class="fa-solid fa-circle-chevron-down fa-2x"></i>
				</div>
				<div class="col-8"></div>
			</div>
			<div class="row align-items-center">
				<div class="col-4 text-center">
					<h4>자격등록신청</h4>
				</div>
				<div class="col-8">
					<p>
						웹사이트 <a @click="goToMenu()" href="">자격등록신청페이지</a> 를
						활용하여 등록신청을 진행해 주세요.
					</p>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-4">
					<i class="fa-solid fa-circle-chevron-down fa-2x"></i>
				</div>
				<div class="col-8"></div>
			</div>
			<div class="row align-items-center">
				<div class="col-4 text-center">
					<h4>신청등록비 납부</h4>
				</div>
				<div class="col-8">
					<p><a @click="goToFee()" href="">소정의 수수료</a>를 납부 합니다.</p>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-4">
					<i class="fa-solid fa-circle-chevron-down fa-2x"></i>
				</div>
				<div class="col-8"></div>
			</div>
			<div class="row align-items-center">
				<div class="col-4 text-center">
					<h4>서류검토</h4>
				</div>
				<div class="col-8">
					<p>접수된 문서의 형식적 요건을 검토합니다.</p>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-4">
					<i class="fa-solid fa-circle-chevron-down fa-2x"></i>
				</div>
				<div class="col-8"></div>
			</div>
			<div class="row align-items-center">
				<div class="col-4 text-center">
					<h4>보완 및 평가 등록</h4>
				</div>
				<div class="col-8">
					<p>
						접수된 문서 검토 결과 보완사항이 발생하면 보완조치를 위해 추가
						자료를 요청할 수 있습니다.
					</p>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-4">
					<i class="fa-solid fa-circle-chevron-down fa-2x"></i>
				</div>
				<div class="col-8"></div>
			</div>
			<div class="row align-items-center">
				<div class="col-4 text-center">
					<h4>평가</h4>
				</div>
				<div class="col-8">
					<p>평가팀이 구성되어 귀하의 자격평가를 시작합니다.</p>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-4">
					<i class="fa-solid fa-circle-chevron-down fa-2x"></i>
				</div>
				<div class="col-8"></div>
			</div>
			<div class="row align-items-center">
				<div class="col-4 text-center">
					<h4>평가위원회 심의</h4>
				</div>
				<div class="col-8">
					<p>
						평가팀의 평가가 끝나면 최종적으로 평가위원회에 상정 후 최종 평가를
						진행합니다.
					</p>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-4">
					<i class="fa-solid fa-circle-chevron-down fa-2x"></i>
				</div>
				<div class="col-8"></div>
			</div>
			<div class="row align-items-center">
				<div class="col-4 text-center">
					<h4>승인 <br />(보완/거부)</h4>
				</div>
				<div class="col-8">
					<p>평가위원회는 최종적으로 승인 또는 거부 결정을 할 수 있습니다.</p>
				</div>
			</div>
			<div class="row text-center">
				<div class="col-4">
					<i class="fa-solid fa-circle-chevron-down fa-2x"></i>
				</div>
				<div class="col-8"></div>
			</div>
			<div class="row align-items-center">
				<div class="col-4 text-center">
					<h4>인증서 발행</h4>
				</div>
				<div class="col-8">
					<p>최종승인이 완료되면 인증서가 발행됩니다.</p>
				</div>
			</div>
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
	methods: {
		goToMenu() {
			this.$router.push({ path: '/register/apply' })
		},
		goToFee() {
			this.$router.push({ path: '/register/fee' })
		}
	}
}
</script>
<style scoped></style>
