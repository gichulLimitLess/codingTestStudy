'''
  안전 영역
  --> 어떤 지역의 높이 정보가 주어졌을 때, 장마철에 물에 잠기지 않는 안전 영역의 최대 갯수?
'''

import sys
from collections import deque # Queue 사용을 위한 deque import

input = sys.stdin.readline

N = int(input().strip())
board = []

for _ in range(N): # 높이 정보 입력받기
  row = list(map(int, input().strip().split(' '))) # 한 줄 입력받기
  board.append(row)

d = deque()

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

