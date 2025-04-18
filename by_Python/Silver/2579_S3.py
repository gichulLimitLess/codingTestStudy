'''
  계단 오르기
'''

import sys

input = sys.stdin.readline

N = int(input())
scores = [0]  # 0번 계단 dummy
for _ in range(N):
    scores.append(int(input()))

dp = [0] * (N + 1)
dp[1] = scores[1]
if N >= 2:
    dp[2] = scores[1] + scores[2]

# 문제의 조건은 추적이 아니라, 경우의 수를 나누어 처리하는 '점화식 설계'로 해결해야 함
for i in range(3, N + 1):
    dp[i] = max(
        dp[i - 2] + scores[i],              # i-2 → i
        dp[i - 3] + scores[i - 1] + scores[i]  # i-3 → i-1 → i
    )

print(dp[N])
