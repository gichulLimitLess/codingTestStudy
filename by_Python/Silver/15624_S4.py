'''
  피보나치 수열.. 이거 일일이 구하려다 보면, 시간 터짐!
'''

n = int(input())
dp = [0 for _ in range(n+1)]

if n != 0:
  dp[0] = 0
  dp[1] = 1
  for i in range(2, n+1): # 시간 복잡도: dp의 길이는 최대 100만.. 따라서, 
    dp[i] = (dp[i-1] + dp[i-2]) % 1000000007 
  print(dp[n])
else: # 이러한 엣지 케이스 조심!
  print(0)

