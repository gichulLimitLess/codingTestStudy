'''
  양조장 오브 더 이어
'''

import sys

input = sys.stdin.readline

T = int(input().strip())
for _ in range(T):
  N = int(input().strip())
  max_amount = 0
  max_school = ""
  for _ in range(N): # 입력된 학교 갯수만큼 반복
    school, amount = input().split(' ')
    amount = int(amount)
    if amount > max_amount: # 더 많이 먹은 학교가 나왔으면
      max_amount = amount
      max_school = school
  
  print(max_school) # 술 소비가 가장 많은 학교의 이름 출력