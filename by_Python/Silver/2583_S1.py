'''
  첫째 줄 M, N, K (M, N, K <= 100) / M * N 배열, K개의 직사각형
  왼쪽 아래 (0,0), 오른쪽 위(M-1, N-1)
'''
import sys

input = sys.stdin.readline
sys.setrecursionlimit(10000) #재귀 깊이 한계 수정

[M, N, K] = map(int, input().strip().split(' ')) # 여기서는 x좌표, y좌표 순임

board = [[False for _ in range(N)] for _ in range(M)] # M*N 크기 배열 만들기

for _ in range(K): # board에 모든 곳을 표시할 예정 (O(100*100*100) 걸릴 예정)
  [x1, y1, x2, y2] = map(int, input().strip().split(' '))
  for i in range(y1, y2):
    for j in range(x1, x2):
      if board[i][j] != True:
        board[i][j] = True  

#상하좌우 탐색을 위한 dy, dx 선언
dy = [1, -1, 0, 0]
dx = [0, 0, -1, 1]

#넓이 계산을 위함
width = 0
width_list = []
area_cnt = 0

#DFS (모든 board 탐색할 테니까.. O(100*100))
def DFS(y, x): 
  global width # 바깥에서 선언한 전역 변수는 이와 같이 global 키워드 써야 함
  board[y][x] = True
  width += 1
  
  for i in range(4):
    if y+dy[i] < 0 or y+dy[i] >= M or x+dx[i] < 0 or x+dx[i] >= N: continue
    elif board[y+dy[i]][x+dx[i]] == True: continue
    else:
      DFS(y+dy[i], x+dx[i])
  
  return # 여기로 빠져 나왔다면 일단 그 depth에서의 탐방은 끝난 거임, return

#board 탐색하며 탐색 안된 곳(False인 곳) 찾는다
for i in range(M):
  for j in range(N):
    if board[i][j] == False:
      DFS(i, j) #DFS 탐색
      area_cnt += 1
      width_list.append(width)
      width = 0

print(area_cnt)
width_list.sort() # O(5000log5000) -> 크게 상관 X
print(' '.join(map(str, width_list)))