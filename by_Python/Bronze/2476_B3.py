'''
  주사위 게임
  1. 같은 눈 3개: 10,000 + (같은 눈) * 1000
  2. 같은 눈 2개: 1,000 + (같은 눈) * 100
  3. 모두 다른 눈: (그 중 가장 큰 눈) * 100

  N(2 <= N <= 1000)명이 참가할 때, 가장 많은 상금을 받은 사람의 상금?
'''

N = int(input())
max_val = 0

for _ in range(N):
  a, b, c = map(int, input().split(' '))

  if a == b and b == c: # 경우 1 => 같은 눈 3개: 10,000 + (같은 눈) * 1000
    res = 10000 + a * 1000
    max_val = max(max_val, res)
  elif a == b or b == c or a == c: # 경우 2 ==> 같은 눈 2개: 1,000 + (같은 눈) * 100
    if a == b or a == c:
      res = 1000 + a * 100
    else:
      res = 1000 + b * 100
    max_val = max(max_val, res)
  else: # 경우 3 ==> 모두 다른 눈: (그 중 가장 큰 눈) * 100
    imsi_list = [a, b, c]
    imsi_list.sort()
    res = imsi_list[2] * 100
    max_val = max(max_val, res)

print(max_val) # 답 출력