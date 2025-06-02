'''
  짝수를 찾아라
  --> 주어진 수에서, 짝수인 자연수들 모두 찾아서 그 합 구하고, 고른 짝수들 중에서 최솟값 찾는 프로그램 작성
'''

import sys

input = sys.stdin.readline

T = int(input().strip())

for _ in range(T): # 테스트 케이스만큼 반복
  num_list = list(map(int, input().strip().split(' ')))
  num_list.sort()

  sum = 0
  min_even = 0
  for element in num_list:
    if element % 2 == 0: # 짝수인 경우에만 덧셈 진행
      if min_even == 0: # 제일 작은 짝수 발견
        min_even = element

      sum += element

  print(f"{sum} {min_even}")
