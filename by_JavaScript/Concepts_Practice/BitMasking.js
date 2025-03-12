/*
  두 정수 a, b를 비트별로 AND 연산 -> a & b
  두 정수 a, b를 비트별로 OR 연산 -> a | b
  두 정수 a, b를 비트별로 XOR 연산 -> a ^ b
  정수 a의 비트별로 NOT 연산 결과 -> ~a
  정수 a를 왼쪽으로 b비트 시프트 -> a << b
  정수 a를 오른쪽으로 b비트 시프트 -> a >> b

  ==> 유의할 점: 비트 연산자의 우선 순위는 비교 연산자보다 낮다
*/

//비트마스킹을 통한 집합(set) 구현
let set = 0;

//원소 추가
function add(x) {
  set |= (1 << x);
}

//원소 제거
function remove(x) {
  set &= (0 << x);
}

//원소 포함 여부 확인
function check(x) {
  return (set & (1 << x)) === 1;
}

//원소 토글(존재하면 제거, 없으면 추가)
function toggle(x) {
  set ^= (1 << x);
}

//모든 원소 추가 (1~20에 관하여...)
function all() {
  set = (1 << 21) - 1; //2^21 - 1: 0~20번째 비트를 모두 1로 설정
}

//공집합으로 초기화
function empty() {
  set = 0;
}