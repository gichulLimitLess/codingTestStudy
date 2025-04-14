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
direction_infos = []
seconds = 0 #이 게임에서 걸린 시간 seconds
snake = deque([1, 1]) #deque 선언 (처음 위치는 (1,1))
now_head = [1, 1] # 지금 머리의 위치
directions = [[0, 1], [1, 0], [0, -1], [-1, 0]] # 방향 관련 
now_direction = [0, 1] #처음은 오른쪽을 향함

for _ in range(L):
  [X, C] = list(input().strip().split(' '))
  X = int(X) #첫째 항목은 정수이어야 함
  if seconds < X: #현재 경과한 시간이 X보다 작다면, 그 이전까지의 과정들을 시뮬레이션 돌려줘야 함
    while seconds < X:
      now_head[0] = now_head[0] + now_direction[0]
      now_head[1] = now_head[1] + now_direction[1]
      snake.append(now_head) # 몸 길이 늘어남 (deque에 append)
      if now_head[0] == 0 or now_head[0] == N+1 or now_head[1] == 0 or now_head[1] == N+1: break #벽에 부딪혔다면
      if [now_head[0], now_head[1]] in snake: break #머리가 자기 자신에 부딪힌다면 --> (O(100))
      if board[now_head[0]][now_head[1]] == True: #지금 머리가 위치한 곳에 사과가 있다면
        board[now_head[0]][now_head[1]] = False #해당 칸을 False로 바꿈
      else: #사과 없으면
        deque.popleft() #가장 먼저 들어온 놈(꼬리)를 빼낸다
      seconds += 1 # 시간 증가
  
  if now_direction[0] == 0 and now_direction[1] == 1:

 

      



print(board)