const fs = require('fs'); //'fs' 객체 가져오기
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';
//input 한 번에 받기
const input = fs.readFileSync(filePath).toString().split('\n');

/*
  1. 현재 Queue의 가장 앞에 있는 문서의 '중요도'를 확인
  2. 나머지 문서들 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면,
     이 문서를 인쇄하지 않고 Queue의 가장 뒤에 재배치한다. 그렇지 않다면 바로 인쇄한다.
  --> 기본적인 Queue를 사용하긴 하는데, 맨 앞에 있는 애의 '중요도'를 나머지 문서들의 '중요도'와 비교
      => 비교 결과를 이용해서 그대로 인쇄할지, 가장 뒤로 재배치할지 지정
      => 이를, 내가 몇 번째로 뽑히는지 알고 싶은 문서의 순서를 알아낼 때까지 반복
*/

//입력 받기
let testCase_cnt = input[0];
/*
  문서의 개수 N(1 ≤ N ≤ 100)
  몇 번째로 인쇄되었는지 궁금한 문서가 현재 Queue에서 몇 번째에 
  놓여 있는지를 나타내는 정수 M(0 ≤ M < N)
*/

let answer = []; //답 저장할 배열

for(let i = 0; i< testCase_cnt; i++) {
  let [N, M] = input[1+2*i].split(' ').map(Number);
  let importance_list = input[2+2*i].split(' ').map(Number);

  // 중요도 1부터 9까지의 빈도수를 저장
  // 얘 안쓰고.. 일일이 important_list 돌면서 최대 값 분석하면.. 시간 초과 남,,
  let freq = Array(10).fill(0);
  for (let importance of importance_list) {
    freq[importance]++;
  }

  // 현재 남아있는 문서 중 최대 중요도를 초기화 (9부터 내림차순 확인)
  let maxImportance = 9;
  while (maxImportance > 0 && freq[maxImportance] === 0) {
    maxImportance--;
  }

  let order = 0;
  
  //M이 맨 앞에 와서 뽑힐 때까지 (뽑히면, M은 -1이 될 것이다)
  while(M >= 0) {
    //맨 앞에 거가 제일 우선순위가 높은 경우이면..?
    if(importance_list[0] === maxImportance) {
      M--; //추적 중인 문서 인덱스 갱신
      order++;
      importance_list.shift(); //맨 앞에 것을 인쇄한다(queue에서 뽑아내기)
      freq[maxImportance]--;

      // 현재 최대 중요도의 문서가 모두 인쇄되었다면, 다음으로 높은 중요도를 찾음
      if (freq[maxImportance] === 0) {
        while (maxImportance > 0 && freq[maxImportance] === 0) {
          maxImportance--;
        }
      }

    } else { //나머지 문서들 중 현재 문서보다 중요도가 높은 문서가 하나라도 있다면..ㅜ
      if(M === 0) { //맨 앞에 것이 추적 대상이었다면
        M = importance_list.length - 1; //추적 대상의 인덱스 맨 뒤로 업데이트
      } else {
        M--;
        //뽑힌 건 없으니까, order를 증가시키진 않는다.
      }
      importance_list.push(importance_list.shift()); //맨 뒤로 재배치
    }
  }
  answer.push(order);
}

console.log(answer.join('\n'));