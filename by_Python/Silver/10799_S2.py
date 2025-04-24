'''
  쇠 막대기 문제 -> 처음엔 이해가 어려웠으나..
  ==> 스택으로 풀면 된다는 깨달음에 도달함 (쌍 짓기 문제는.. 역시 스택 많이 쓰네~)
'''

info_list = list(input())

total_pipe_cnt = 0 # 잘려진 쇠막대기 조각의 총 갯수
pipe_cnt = 0 # 0부터 해야지...

for idx, element in enumerate(info_list):
  if idx > 0 and info_list[idx-1] == '(' and element == ')': # 레이저 발견
    pipe_cnt -= 1
    total_pipe_cnt += pipe_cnt
  elif element == ')': # 막대기 하나의 끄트머리 발견
    total_pipe_cnt += 1
    pipe_cnt -= 1
  else: # 막대기 하나의 시작 지점 발견
    pipe_cnt += 1

print(total_pipe_cnt)