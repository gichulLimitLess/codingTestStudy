'''
  로또
  --> 49가지 수 중 k (6 < k < 13)개의 수를 골라서 집합 S 만들고, 그것만 가지고 번호 선택
  --> 집합 S와 k가 주어졌을 때, 수를 고르는 모든 방법?
  ==> k개의 수 중에서 6개를 고르는 경우 모두 구하기 (이거 조합 문제)
  --> 최악의 경우... 12C6 --> 665280개의 조합 (충분히 가능할 듯)
'''
import sys
write = sys.stdout.write

# 조합 함수
def Combi(depth, start):
  if depth == 6: # 기저조건 -> 6개 다 뽑았으면
    write(' '.join(map(str, combination)) + '\n')
    return # 호출 종료
  
  for i in range(start, k): # 반복문 돌아가기
    combination[depth] = S[i]
    Combi(depth+1, i+1)

# 여러 개의 테스트 케이스 입력 받기 (0 입력되면 탈출)
while True:
  input_val = input()

  if input_val == "0":
    break
  
  input_list = list(map(int, input_val.split(' '))) # 첫번째 수는 k, 다음 k개의 수는 집합 S에 포함되는 수
  combination = [0 for _ in range(6)]
  k = input_list[0]
  S = input_list[1:]
  
  Combi(0, 0)
  write('\n')
