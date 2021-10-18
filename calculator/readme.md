# 프로젝트 진행하며 배운 것

- 0.1 + 0.2 = 0.30000000000000004 이런 숫자가 나온다. <br>
  ----> 해결방법 : 만일 `0.1 + 0.003 `값을 입력했다면, 각 1000곱해서 정수로 만들어서 계산하고 다시 1000으로 나누어서 정수로 바꿔줌. [참고 : 부동소수점 실수에 관하여](https://velog.io/@sgyoon/2019-09-15-01)

- 좋은 변수명에 대한 고민 : 변수명은 길어도 괜찮으니 '직관적'으로 짜야한다. 단, 의미전달이 분명해야함
  [참고 : 좋은 변수명 짓기 팁](https://remotty.github.io/blog/2014/03/01/hyogwajeogin-ireumjisgi/)
  <br><br>
- 캡슐화 : 함수의 외부환경에있는 변수를 쓰는 거 --> 함수 calculate()의 switch문 참고
  [참고 : 클로저, 그리고 캡슐화와 은닉화](https://meetup.toast.com/posts/90)
  <br><br>

- 메서드 inclues & indexOf (배열에서 필요한 값을 찾아내는 메서드)

```
console.log("123.3".includes(".")); // true
console.log("123.3".indexOf(".")); // 3
console.log("123.3".indexOf(".") > -1 ); // true (-1은 값 없을때)
console.log("1.234".length - "1.234".indexOf('.') - 1);// 2면 100, 3 = 10*3, 4 = 10*4
```

<br><br>

- 메서드 Math.pow(num1, num2) : num1의 num2승

```
const result = Math.pow(10, 2);
console.log(result); // 100 (10의 2승)
```

## 참고Reference

- [MDN 자바스크립트 재입문](https://developer.mozilla.org/ko/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
-
