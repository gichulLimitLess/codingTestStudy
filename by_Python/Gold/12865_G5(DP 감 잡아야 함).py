'''
  배낭 문제
  --> 대표적인 DP 유형!
'''
N, K = map(int, input().split(' '))
items_list = []
dp = [[0 for _ in range(K+1)] for _ in range(N+1)]
for _ in range(N): # N개의 줄에 걸쳐 각 물건의 무게와 해당 물건의 가치를 입력 받음
  W, V = map(int, input().split(' '))
  items_list.append([W, V])

for i in range(1, N+1): # 세로 방향 "행" (K번째 물건)
  weight, value = items_list[i-1]
  for j in range(K+1): # 가로 방향 "열" 갯수 세기 (배낭의 최대 무게)
    if weight > j: # i번째 물건의 무게가, 배낭의 최대 무게보다 크다면
      dp[i][j] = dp[i-1][j]
    elif weight <= j: # i번째 물건의 무게가, 배낭의 최대 무게보다 작거나 같다면
      dp[i][j] = max(dp[i-1][j], value + dp[i-1][j-weight]) # 배낭에 i번째 물건을 넣거나, 안넣거나..

print(dp[N][K])