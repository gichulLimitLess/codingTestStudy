import sys

# alias 설정
input_alias = sys.stdin.readline

TC = int(input_alias())
answer = [] # 정답을 저장할 배열

# TC만큼 반복문 돌며 정답을 구한다
for _ in range(TC):
  nums = list(map(int, input_alias().rstrip().split(' ')))
  answer.append(str(nums[0] + nums[1]))

# 반복문 돌면서 출력
# for i in range(TC):
#   print(answer[i])

# print로 일일이 찍어내는 것보다 아래 방식이 더 빠를것임 (한, 300ms 더 빠름,,)
sys.stdout.write("\n".join(answer) + "\n")