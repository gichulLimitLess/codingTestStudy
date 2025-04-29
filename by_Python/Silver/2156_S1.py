'''
  (가장 중요한 제약조건)
  - 포도주 잔을 선택하면 그 잔에 들어있는 포도주는 모두 마셔야 하고, 마신 후에는 원래 위치에 다시 놓아야 한다
  - 연속으로 놓여 있는 3잔을 모두 마실 수 없다.
'''
import sys
input = sys.stdin.readline

n = int(input()) # 포도주 잔의 갯수 n
drink = [] # 각 위치의 포도주 양을 나타낸 list
if n >= 1: dp = [0 for _ in range(n)] # n번째 포도주를 선택했을 시의 최댓값을 저장하는 dp

for _ in range(n):
  a = int(input().strip())
  drink.append(a)

if n == 0:
  print(0)
elif n == 1:
  print(drink[0])
elif n == 2:
  print(drink[0] + drink[1])
else:
  dp[0] = drink[0]
  dp[1] = drink[0] + drink[1]
  dp[2] = max(drink[0] + drink[2], drink[1]+drink[2], dp[1])

  for i in range(3, n): # dp 배열 채우기
    dp[i] = max(dp[i-1], dp[i-2]+drink[i], dp[i-3]+drink[i-1]+drink[i])
  
  print(dp[n-1])