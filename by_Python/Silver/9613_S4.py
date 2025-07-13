'''
  GCD 합
'''

import math # gcd를 쉽게 구하기 위해 사용할 수 있는 메소드

tc = int(input())

for _ in range(tc): # 테스트 케이스만큼 반복
  input_arr = list(map(int, input().split(' ')))
  n = input_arr[0] # 맨 앞줄은 각 테스트 케이스의 숫자 갯수
  sum = 0

  # 가능한 모든 쌍들을 brute force 하면서 계산을 일일이 한다 (그래도, O(100C2) => 시간 초과 X)
  for i in range(1, n+1):
    for j in range(i+1, n+1):
      res = math.gcd(input_arr[i], input_arr[j])
      sum += res
  
  print(sum) # 각 test case에 관해 결과 출력
