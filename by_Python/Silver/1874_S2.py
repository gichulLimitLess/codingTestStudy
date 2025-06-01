'''
  스택 수열
  -> 1~N까지 수를 스택에 넣었다가 뽑아 늘어 놓음으로서, 하나의 수열 만들 수 있음..
  -> 스택에 push 하는 순서는 무조건 오름차순
  Q. 임의의 수열이 주어졌을 때, 스택을 이용해서 그 수열을 만들 수 있는지 없는지 알아보자 (push는 +, pop은 -로 표시 / 못 만들면 NO 출력)
'''
import sys

input = sys.stdin.readline

n = int(input().strip())

stack = [] # stack으로 사용할 배열
answer = [] # 답을 저장할 배열
num = 1 # 숫자는 오름차순으로 1~n까지 집어넣을 것임 (차근차근 증가)
target_array = [] # 만들 수열
pointer = 0 # target_array를 검사할 pointer

for _ in range(n):
  a = int(input().strip())
  target_array.append(a)

arrayLen = len(target_array)

# target_array를 모두 탐색하지 않았을 때까지만 반복
while pointer < arrayLen:
  # 숫자가 오름차순으로 들어오기 때문에, stack의 맨 위에 있는 애가 지금 검사 중인 애보다 커버리면 그 수열은 못 만드는 거임
  if len(stack) > 0 and stack[-1] > target_array[pointer]: 
    break
  elif len(stack) > 0 and stack[-1] == target_array[pointer]: # 찾았으면
    stack.pop()
    answer.append('-')
    pointer += 1
  else: # 원하는 거 아직 못 찾았으면
    stack.append(num)
    num += 1
    answer.append('+')

if pointer == arrayLen: # pointer가 target_array의 모든 애들을 다 탐색한 경우라면
  print('\n'.join(answer))
else: # 다 탐색하지 못한 경우 --> 그 수열을 못 만드는 경우
  print("NO")