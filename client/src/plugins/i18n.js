/* eslint-disable */

// 특정기능을 수행하는 함수
// 첫 영문과 n으로 끝나는데 그 사이 18개 문자가 있다는 의미. 모든 프로그램에서 공통사용 용어임.
// 서비스 애플이 다국어 사용할 때 다국어 처리해주는 기능.

// 설치했다는 의미에서 install이름으로 생성
// 미리 짜왔음.
// 플러그인을 사용하려면 main.js에 등록해줘야 함.
export default {
  install: (app, options) => {
    //   en.hi = ['en','hi']
    // 두번째 파라미터

    app.config.globalProperties.$translate = (key, params = {}) => {
      return (
        key
          .split('.')
          .reduce((o, i) => {
            if (o) return o[i] // o['en'] = {hi: 'Hello'}
            // o['hi'] = 'hello' o는 {hi: 'Hello'}이므로 키값 hi는 최종적으로는 hello가 들어가 있는 상태. 22강 2:19
          }, options)
          // 중괄호로 시작하고 문자가 하나이상 나오고 중괄호로 끝나는게 있으면 {name}이 찾아짐.
          // 파람즈의 유저인포의 네임을 가져와야 하는데 {name}이라는 것이없으므로 여기서 중괄호를 제거 해줘야 함
          // slice함수사용해서 중괄호 제거하며 name값을 동적으로 가져올 수 있음.
          .replace(/{\w+}/g, (match) => params[match.slice(1, -1)])
      )
    }

    // {name}
    // match.slice(1, -1)
    // name
    // 'Seungwon Go'

    // {
    //     name: 'Seungwon Go',
    //     email: 'seungwon.go@gmail.com',
    //     lang: 'en'
    //   }
  }
}
