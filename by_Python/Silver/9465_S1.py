TC = int(input()) # 테스트 케이스 갯수 입력 받기
res = []

for _ in range(TC): # 테스트 케이스만큼 반복
  n = int(input()) # n(1 <= n <= 100,000) 입력 받기
  dp = [[0 for _ in range(n)] for _ in range(2)] # 각 스티커에 관한 최댓값을 저장할 배열 dp
  sticker = [] # 각 스티커의 점수값을 저장할 배열 sticker

  row_1 = list(map(int, input().split())) #1행 입력받기
  sticker.append(row_1)
  row_2 = list(map(int, input().split())) #2행 입력받기
  sticker.append(row_2)

  #초기 세팅
  dp[0][0] = sticker[0][0]
  dp[1][0] = sticker[1][0]
  for i in range(1, n): # dp 배열을 채운다
    dp[0][i] = max(dp[0][i-1], dp[1][i-1] + sticker[0][i])
    dp[1][i] = max(dp[1][i-1], dp[0][i-1] + sticker[1][i])
  
  res.append(str(max(max(row) for row in dp))) #dp에서 최댓값을 res에 append (나중에 한 번에 출력)

print('\n'.join(res))
