'''
  최소공배수
'''
import math

A, B = map(int, input().split(' '))
gcd = math.gcd(A, B) # 우선 최대공약수 구하기

# 문제 조건에선 C/C++에서는 long long int를 사용하는 등의 내용이 있지만, python은 따로 처리 필요 X
answer = gcd * (A // gcd) * (B // gcd) # 최소공배수 구하기(초딩때 배웠던 공식 활용)

print(answer) # 답 출력