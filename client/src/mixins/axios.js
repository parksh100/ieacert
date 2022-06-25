/* eslint-disable */
import axios from 'axios'

export default {
  created() {},
  mounted() {
    console.log('mixin에서 출력')
  },
  unmounted() {},
  methods: {
    // printA() {
    //   console.log('A')
    // },
    // 문법이므로 그냥 사용하면됨.
    // get함수에 url만 넣어주면 됨. get방식으로 데이터 조회할 때는 이렇게 하라는 문법
    // 전역에서 사용하는 믹스인 함수는 vue에서는 $표시를 넣어서 전역함수임을 표시함.
    async $get(url) {
      return (
        await axios.get(url).catch((e) => {
          console.log(e)
        })
      ).data
    }
  }
}

// 서버랑 통신하는 가장 인기있는 플러그인 axios사용
// npm install axios로 설치
// 이번시간 알려주는 4~5개 함수면 끝남.
// 실무에서는 데이터를 조회하지않는 화면은 한군데도 없음. 모든화면에 조회기능이 없는 화면은 없음.
// 이렇게 믹스인으로 만들어 놓으면 필요한 곳에서 얼마든지 불러서 사용하면 되도록 믹스인을 활용
