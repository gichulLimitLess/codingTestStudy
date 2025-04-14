'''
  A+B 출력하자
'''
import sys

input = sys.stdin.readline

res = []

# Python에서 EOF로 주어지는 입력에 대해서 처리하는 법
while True:
  temp = input()
  if temp == "": #EOF이면, 이 condition이 True가 됨, while문 빠져나감
    break
  else:
    [A, B] = map(int, temp.strip().split(' '))
    res.append(str(A+B))
  
print('\n'.join(res))