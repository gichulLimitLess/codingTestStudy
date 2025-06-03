'''
  카잉 달력
  --> 걍 단순히 +1씩 하면서 모든 경우 탐색하면.. 시간초과 남 
  --> 뭔가.. 증가했다가 다시 1로 돌아가고.. 이런 느낌... 이거 모듈러(나머지) 연산 사용하면 되는 거 아님?

  [문제의 핵심]
  - 모든 day의 값들은.. x+M*i 또는 y+N*j 형태로 표현할 수 있다
    --> 직접 하나씩 더해서 모든 경우를 탐색하려는 경우는 무조건 시간 초과 난다.
  - 단순 브루트포스가 아닌.. 수학적 구조로 전환이 필요하고.. 문제 속 패턴 발견이 핵심이었다...
    --> 그리고, 그런 패턴을 이용해서 푸는 거엔.. mod 연산이 자주 쓰인다!
'''

import math

T = int(input())

for _ in range(T):
  M, N, x, y = map(int, input().split())
  lcm = math.lcm(M, N)

  result = -1
  day = x  # day ≡ x mod M을 만족하는 값부터 시작
  while day <= lcm:
      if (day - y) % N == 0:  # 두 번째 조건 검사
          result = day
          break
      day += M  # M 간격으로 증가시켜야 day ≡ x mod M 유지

  print(result)

