'''
  수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하자
  A = {10, 20, 10, 30, 20, 50} -> 가장 긴 증가하는 부분 수열은.. {10, 20, 30, 50}, 길이는 4
'''

N = int(input())
num_list = list(map(int, input().split(' ')))
dp = [1 for _ in range(N)] # 모든 부분 수열은 일단 무조건 길이가 1이라고 가정하고 시작

for idx, e in enumerate(num_list): #num_list 순회
  max_val = 0
  for j in range(idx): # 내가 지금 포인트 찍어놓은 애의 바로 뒤쪽까지 순회하며 확인
    if e > num_list[j]: # 지금 확인하고 있는 값이 e보다 작다면
      max_val = max(max_val, dp[j])
  
  dp[idx] = max_val + 1 # 현재까지 구한 최대 길이 + 1을 여기에다가 우선 저장

print(max(dp))