'''
  정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램 작성
  명령은 총 5가지.
  - 1 X: 정수 X를 스택에 넣는다 (1 <= X <= 100,000)
  - 2: 스택에 정수가 있다면 맨 위의 정수를 빼고 출력. 없다면 -1을 대신 출력
  - 3: 스택에 들어있는 정수의 갯수를 출력
  - 4: 스택이 비어 있으면 1, 아니면 0 출력
  - 5: 스택에 정수가 있다면 맨 위의 정수를 출력. 없다면 -1을 대신 출력
'''

import sys

input = sys.stdin.readline # 좀 더 빠른 입출력을 위한 친구
order_cnt = int(input().strip()) # 명령의 갯수 입력받기

stack = [] # 스택으로 사용할 배열
order = 0 # 명령을 저장할 변수
res = [] # 결괏값을 저장할 배열

# 명령 갯수만큼 for문 반복
for _ in range(order_cnt):
  order = list(map(int, input().strip().split(' ')))

  if order[0] == 1: # 1번 명령일 경우 --> 정수 X를 스택에 넣는다
    stack.append(order[1])

  elif order[0] == 2: # 2번 명령일 경우 --> 스택에 정수가 있으면 맨 위의 정수를 꺼내고 출력 / 없으면 -1 출력
    if len(stack) == 0: #스택이 비어 있다면 -1
      res.append(str(-1))
      continue    
    
    res.append(str(stack.pop())) #스택에 정수가 있으면, 맨 위의 정수를 꺼내고 출력

  elif order[0] == 3: # 3번 명령일 경우 --> 스택에 들어있는 정수의 갯수 출력
    res.append(str(len(stack))) #스택의 길이 자체가, 결국 스택에 들어있는 정수의 갯수일 것이다

  elif order[0] == 4: # 4번 명령일 경우 --> 스택이 비어 있으면 1, 아니면 0 출력
    if len(stack) == 0:
      res.append(str(1))
    elif len(stack) >= 1:
      res.append(str(0))
  
  elif order[0] == 5: # 5번 명령일 경우 --> 스택에 정수가 있다면 맨 위의 정수 출력 / 없다면 -1 출력
    if len(stack) == 0: #스택이 비어 있다면 -1
      res.append(str(-1))
      continue

    res.append(str(stack[len(stack)-1])) # 맨 위에 정수 출력 (빼내면 안된다)

print('\n'.join(res)) # 한 번에 모아서 출력