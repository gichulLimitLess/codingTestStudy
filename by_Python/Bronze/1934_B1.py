'''
  최소공배수 구하기
'''
import math
import sys

input = sys.stdin.readline

T = int(input().strip())
res_list = []
for _ in range(T): # 테스트 케이스 수만큼 반복
  a, b = map(int, input().strip().split(' '))
  gcd = math.gcd(a, b)
  res_list.append(str(gcd * (a//gcd) * (b//gcd))) # 최소공배수 구하기

print('\n'.join(res_list)) # 결과 출력