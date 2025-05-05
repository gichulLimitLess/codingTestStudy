'''
  두 행렬을 더하는 프로그램 만들기
'''

N, M = map(int, input().split())

matrix_1 = []
matrix_2 = []
res_matrix = []

# 배열 입력받기
for i in range(N):
  matrix_1.append(list(map(int, input().split(' '))))

for i in range(N):
  matrix_2.append(list(map(int, input().split(' '))))

# 행렬 덧셈 연산
for i in range(N):
  res_row = []
  for j in range(M):
    res_row.append(str(matrix_1[i][j] + matrix_2[i][j]))
  
  res_matrix.append(res_row)

# 결과 출력
for i in range(N):
  print(' '.join(res_matrix[i]))