'''
  뱀의 초기 위치: (0,0) (-> 맨 위/맨 좌측), 처음엔 오른쪽을 향해 있음

  뱀은 매 초마다 이동, 다음과 같은 규칙을 따름
  - 먼저 뱀은 몸 길이를 늘려 머리를 다음 칸에 위치시킨다
  - 만약 벽이나 자기자신의 몸과 부딪히면 게임이 끝난다
  - 만약 이동한 칸에 사과 있다면
    - 그 칸에 있던 사과가 없어지고 꼬리는 움직이지 않는다
  - 없다면
    - 몸길이를 줄여서 꼬리가 위치한 칸을 비워준다. 즉, 몸 길이는 변하지 X
  
  사과의 위치와 뱀의 이동경로가 주어질 때, 이 게임이 몇 초에 끝나는 지 계산해라

  입력: 보드 크기 N (2 <= N <= 100)
       사과의 갯수 K (0 <= K <= 100)
       K개의 줄에 사과의 위치, (행, 열) (맨 위 맨 좌측에는 사과 X)
       다음 줄엔 뱀의 방향 변환 횟수 L (1<=L<=100)
       L개의 줄엔 뱀의 방향 변환 정보, (X, C) (게임 시작한 지 X(1<=X<=10000)초 뒤에 왼쪽('L') 또는 오른쪽('D')으로 90도 방향 회전)
  출력: 게임이 몇 초만에 끝나는 지 출력
'''
import sys
from collections import deque

input = sys.stdin.readline

N = int(input().strip()) #보드 크기 N
K = int(input().strip()) #사과의 갯수 K

board = [[False for _ in range(N+2)] for _ in range(N+2)] # board 만들기 (0, N+1 index에 대해선, '벽'을 뜻함)

for _ in range(K): #사과의 위치 입력 받아서, 해당 위치에 사과 값을 True로 바꾸기
  [y, x] = map(int, input().strip().split(' '))
  board[y][x] = True # 사과 있다고 표시 (시작이 1행 1열)

L = int(input().strip()) #뱀의 방향 변환 횟수 L
direction_inputs = [] #그 관련 정보들의 쌍 [X,C] 담는 direciton_inputs
for _ in range(L):
  X, C = input().strip().split(' ') #입력 받기
  X = int(X) #첫째 항목은 정수이어야 함
  direction_inputs.append([X, C])

def gaming(direction_inputs):
  seconds = 0 #이 게임에서 걸린 시간 seconds
  snake = deque([]) #deque 선언 
  snake.append([1, 1]) # 처음 위치는 (1,1)
  now_head = [1, 1] # 지금 머리의 위치 (갱신하며 추적할 것임)
  directions = [[0, 1], [1, 0], [0, -1], [-1, 0]] # 진행할 방향 관련 (오른쪽 방향을 바라보며 시작)
  direction_idx = 0 #이는 directions 배열에서의 인덱스로 사용될 것임

  for element in direction_inputs:
    while seconds < element[0]: #들어온 경과 시간(X)에 도달할 때까지의 과정을 수행해 줘야 함
      #방향에 따른 이동 처리
      dy, dx = directions[direction_idx % 4]
      now_head[0] += dy
      now_head[1] += dx

      #이렇게 값을 copy 떠놔야 값이 동시에 바뀌는 불상사 일어나지 X
      new_y = now_head[0]
      new_x = now_head[1]
      snake.append([new_y, new_x]) # 몸 길이 늘어남 (deque에 append)

      if new_y == 0 or new_y == N+1 or new_x == 0 or new_x == N+1: #벽에 부딪혔다면
        return seconds+1 
      if snake.count([new_y, new_x]) > 1: #머리가 자기 자신에 부딪힌다면 --> (O(100))
        return seconds+1 

      if board[new_y][new_x] == True: #지금 머리가 위치한 곳에 사과가 있다면
        board[new_y][new_x] = False #해당 칸을 False로 바꿈
      else: #사과 없으면
        snake.popleft() #가장 먼저 들어온 놈(꼬리)를 빼낸다

      seconds += 1 # 시간 증가
    
    #들어온 방향 관련 내용을 검사해야 함 (왼쪽으로 90도 회전: 'L', 오른쪽으로 90도 회전: 'D') --> 이걸로 방향 틀기 후, 이후 과정 수행
    if element[1] == 'L': #왼쪽일 경우
      direction_idx -= 1 # directions에서 "왼쪽"으로 가야 함
    elif element[1] == 'D': #오른쪽일 경우
      direction_idx += 1 # direcitons에서 "오른쪽"으로 가야 함

  # for문을 끝내고도 안 끝났다면, 방향은 확정. 그 방향으로 일직선으로 갈 것임 --> 이 경우에도 벽에 부딪히거나, 자기 자신과 부딪힐 가능 성 있음
  while True:
    dy, dx = directions[direction_idx % 4]
    now_head[0] += dy
    now_head[1] += dx
    new_y = now_head[0]
    new_x = now_head[1]
    snake.append([new_y, new_x])

    # 벽이나 자기 몸과의 충돌 검사
    if new_y == 0 or new_y == N+1 or new_x == 0 or new_x == N+1:
        return seconds + 1
    if snake.count([new_y, new_x]) > 1:
        return seconds + 1

    # 사과 유무에 따라 꼬리 처리
    if board[new_y][new_x]:
        board[new_y][new_x] = False
    else:
        snake.popleft()

    seconds += 1

print(gaming(direction_inputs)) # 게임 끝나는 데 걸리는 시간 출력