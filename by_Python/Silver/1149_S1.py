'''
  RGB 거리엔 집이 N개
  거리는 선분.. 1번 집부터 N번 집 / 집은 R,G,B 중 하나로 칠해야 함

  R,G,B로 칠하는 비용이 주어졌을 때, 아래 규칙 만족하며 모든 집 칠하는 비용의 최솟값?
  - i(2<=i<=N-1)번 집의 색은 i-1, i+1번 집의 색과 같으면 X

  [입력]
  - 집의 수 N(2≤N≤1000)
  - 각 집을 R,G,B로 칠하는 비용이 1번 집부터 한 줄에 하나씩 
    (칠하는 비용은 1000보다 작거나 같은 자연수)
  
  [출력]
  - 첫째 줄에 모든 집을 칠하는 비용의 최솟값
'''

N = int(input()) #집의 수 N 입력받기
rgbPrice = [] # 각 집의 R, G, B 색칠 값 저장
rgbPrice.append([0,0,0])
dp = [[0, 0, 0] for _ in range(N+1)] # i번째에서 특정 색을 썼을 때의 최솟값들 모두 저장
for _ in range(N):
  R, G, B = map(int, input().split(' '))
  rgbPrice.append([R, G, B]) 

for i in range(1, N+1): #dp 배열 채우면서 최솟값 다 찾아본다
  dp[i][0] = min(dp[i-1][1], dp[i-1][2]) + rgbPrice[i][0]
  dp[i][1] = min(dp[i-1][0], dp[i-1][2]) + rgbPrice[i][1]
  dp[i][2] = min(dp[i-1][0], dp[i-1][1]) + rgbPrice[i][2]

print(min(dp[N])) #N번째에서 R,G,B를 썼을 때의 최솟값 3개 중의 최솟값이 최솟값임