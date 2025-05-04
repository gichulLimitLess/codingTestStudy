'''
  별 찍기 문제
'''

N = int(input())
res = []
for i in range((2*N - 1)//2+1): # 인덱스 정보 잘 파악해야 함
  res.append(' '*(N-1-i) + '*' * (1+2*i))
  print(' '*(N-1-i) + '*' * (1+2*i))

for i in range((2*N -1)//2 - 1, -1, -1): # for문에서 이렇게 반대로 가는 인덱스도 잘 파악해야 함
  print(res[i])