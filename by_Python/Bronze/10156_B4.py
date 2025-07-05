'''
  과자
'''

K, N, M = map(int, input().split(' '))
if K * N <= M: # 돈을 더 받을 필요가 없는 경우
  print(0)
else:
  print(K * N - M)
  
