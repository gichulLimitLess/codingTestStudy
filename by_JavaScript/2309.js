const fs = require('fs'); //'fs' 객체 가져오기

const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/example.txt';

//아홉 줄에 걸쳐 난쟁이들 키 입력 받기
let dwarves = [];
dwarves = fs.readFileSync(filePath, 'utf-8').trim().split('\n').map(Number);

/*
  dwarves 값을 모두 더한 값에서 얼마를 뺐을 때 100이 나오는지 구한다
  여기에서 얼마를 빼면 100이 나오는지 구한다
  그 값은 결국, 내가 9개의 수 중에서 빼내야 할 2개의 수를 고르는 기준이 된다
  ==> 2중 for문으로 해결 가능!
*/


let sum = 0;
for(let i = 0; i < 9; i++) {
  sum += dwarves[i];
}

sum = sum - 100;

//더해서 sum 값이 되는 2개의 수를 구해낸다.
//시간 복잡도: 약 8!
for(let i = 0; i<8; i++) {
  for(let j = i+1; j<9; j++) {
    //찾았으면 
    if(sum === (dwarves[i] + dwarves[j]))
    {
      dwarves = dwarves.filter((element) => element !== dwarves[i] && element !== dwarves[j]);
      
      i = 8 //js에서는 goto문이 없으므로, 이런식으로 임의로 조건을 조작해야 함
      break;
    }
  }
}

//오름차순 정렬
dwarves.sort((a,b) => a - b);

//결과 출력
for(let i = 0; i < 7; i++){
  console.log(dwarves[i]);
}