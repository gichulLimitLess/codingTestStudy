'''
  색종이
'''

paper_cnt = int(input())
infos_list = []
for _ in range(paper_cnt): # 정보 입력 받기
  a = list(map(int, input().split(' ')))
  infos_list.append(a)

board = [[False for _ in range(100)] for _ in range(100)]

# board에 입력 (O(10,000) 걸림)
for element in infos_list:
  for i in range(element[0], element[0]+10):
    for j in range(89-element[1], 99-element[1]):
      if board[i][j] == True: # 이미 칠해져 있으면 패스
        continue
      else:
        board[i][j] = True

cnt = 0
# board 검사하며 칠해진 곳 count (O(10,000) 걸림)
for row in board:
  for element in row:
    if element == True:
      cnt += 1

print(cnt)