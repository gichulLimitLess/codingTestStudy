import sys

input_fast = sys.stdin.readline # 빠른 입출력을 위함
tc = int(input())
answer = []

for _ in range(tc):
  str = input_fast().strip()
  front = str[0]
  tail = str[len(str)-1]
  answer.append(front+tail)

for i in range(tc):
  print(answer[i])