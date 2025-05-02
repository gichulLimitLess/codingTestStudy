'''
  킹, 퀸, 룩, 비숍, 나이트, 폰
'''
chess_list = list(map(int, input().split(' ')))
answer = []
a_list = [1, 1, 2, 2, 2, 8]

for idx, e in enumerate(chess_list): # 계산해서 바로 답
  answer.append(str(a_list[idx] - e))

print(' '.join(answer))