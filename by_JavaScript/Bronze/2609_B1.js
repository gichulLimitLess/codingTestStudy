const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//두 자연수 입력 받기
let [num1, num2] = fs.readFileSync(filePath).toString().split(' ').map(Number);

/*
  두 자연수를 입력 받아 최대공약수와 최소공배수를 출력하는 프로그램을 작성해야 함
  --> 두 자연수는 10,000 이하의 자연수
  --> 첫째 줄에는 입력으로 주어진 두 수의 최대 공약수, 둘째 줄에는 두 수의 최소 공배수 출력
  --> 최대공약수는.. 2부터 num1 또는 num2까지 직접 숫자를 더하며 나눠보며...
      => num1, 또는 num2보다 커질 때가지 안 나눠 떨어지면.. 최대공약수는 1인 거다
      => 이걸 반복하면서 최대공약수를 구한다
  --> 최소공배수는.. (각각의 자연수를 최대공약수로 나눈 값(2개 나올 것임)) * (최대공약수) 하면 나옴
*/

let divisor = 2; //나누는 수(제수), 최대 공약수가 2인 경우부터 따져봐야 한다
let greatCommon_divisor = 1; //최대공약수 저장할 것임
let leastCommon_multiple = 1; //최소공배수 저장할 것임

//나누는 수가 1이 되는 경우.. break 하면 된다
while(true) {
  //divisor로 나눠 떨어지는 경우, num1, num2를 divisor 나누며 이를 최소공약수에 곱해서 갱신해 나간다
  //divisor는 다시 2로 초기화 (나누는 수 1은 여기서 의미가 없음)
  if((num1 % divisor === 0) && (num2 % divisor === 0)) {
    num1 = num1 / divisor;
    num2 = num2 / divisor;
    greatCommon_divisor *= divisor;
    divisor = 2;
  //divisor가 num1이나 num2보다 커지는 경우 서로 겹치는 약수는 1뿐
  //그리고, 이것은 결국 while문의 종료 조건이 될 것임
  } else if(divisor > num1 || divisor > num2) { 
    greatCommon_divisor *= 1;
    break;
  } else { //안 나눠떨어지면.. divisor를 더해야 한다
    divisor++;
  }
}

//여태까지 나눠진 num1, num2를 최대공약수와 곱하면, 그것이 최소공배수!
leastCommon_multiple = greatCommon_divisor * num1 * num2;

//결과 출력
console.log(greatCommon_divisor);
console.log(leastCommon_multiple);