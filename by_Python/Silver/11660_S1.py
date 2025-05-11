'''
  구간 합 구하기 5
  -> DP로 풀어제끼는 대표적인 유형인 듯
'''
N, M = map(int, input().split(' '))
board = [] # N*N 크기 배열의 값을 여기에다가 다 저장할 것임
dp = [[0 for _ in range(N)] for _ in range(N)] # 시작점부터 특정 칸까지의 누적합을 저장할 dp 배열

for _ in range(N): # board 배열 채우기 -> O(1024) 소요
  row = list(map(int, input().split(' ')))
  board.append(row)

# DP 배열 채우기 -> O(1024*4) 소요
for i in range(N):
  for j in range(N):
    res = board[i][j] # 우선 (i,j)에 있는 값을 넣고..
    if j-1 >= 0: # 왼쪽에 붙어있지 X
      res += dp[i][j-1]
    if i-1 >= 0: # 위쪽에 붙어있지 X
      res += dp[i-1][j]
    if i-1 >= 0 and j-1 >=0: # 중복 계산 되었을 경우, 빼줘야 한다
      res -= dp[i-1][j-1]
    dp[i][j] = res # dp[i][j]의 값은 res 값과 동일하다

res_list = [] # 결괏값들을 저장할 것임

# 특정 영역의 값 연산을 M번 계산하기 -> O(400,000)
for _ in range(M):
  x1, y1, x2, y2 = map(int, input().split(' '))

  # 계산을 편하게 하기 위함
  x1 = x1-1
  y1 = y1-1
  x2 = x2-1
  y2 = y2-1

  res = dp[x2][y2] # 우선 이 값으로 초기화

  if x1-1 >= 0: # 위쪽에 붙어있지 X
    res -= dp[x1-1][y2]
  if y1-1 >= 0: # 왼쪽에 붙어있지 X
    res -= dp[x2][y1-1]
  if x1-1 >= 0 and y1-1 >= 0: # 중복 계산된 경우, 더해줘야 한다
    res += dp[x1-1][y1-1]
  
  res_list.append(str(res)) # 결과 배열에 append

print('\n'.join(res_list)) # 결과 출력