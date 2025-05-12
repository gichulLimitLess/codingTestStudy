'''
  3가지 관계 중 어떤 관계인지 구하는 프로그램 작성
  1. 첫 번째 숫자가 두 번째 숫자의 약수이다.
  2. 첫 번째 숫자가 두 번째 숫자의 배수이다.
  3. 첫 번째 숫자가 두 번째 숫자의 약수와 배수 모두 아니다.
'''
import sys

input = sys.stdin.readline

while True: # "0 0"이 나올 때까지 무한반복
  a, b = map(int, input().strip().split(' '))
  
  if a == 0 and b == 0: # break 해야 할 상황
    break
  
  if a % b == 0: # a가 b의 배수인 경우
    print("multiple")
  elif b % a == 0: # b가 a의 배수인 경우
    print("factor")
  else: # 둘 다 아닌 경우
    print("neither")