'''
  회의는... 무조건 하나가 끝나야 다른 것이 진행될 수 있음!
  시작시간 기준이 아닌.. 종료 시간 기준으로 보면 어떨까?
  --> 종료 시간 기준으로 작은 것부터 나열하고, 처음부터 확인했을 때..
      지금 확인하고 있는 회의의 시작 시간이 이전 회의의 시간보다 작은 경우는.. 무조건 겹침
      이 경우만 비교하면 되는 거 아님?
      이전 회의가 끝나야, 다음 회의를 시작할 수 있잖아.
  --> 이렇게 생각하면, 문제가 매우 간단해짐!
'''
import sys
input = sys.stdin.readline

N = int(input().strip()) # 회의의 갯수
time_table = [] # 회의 시작, 종료 시간들을 저장할 time_table

for _ in range(N): # 회의 시간들 입력 받기
  s, f = map(int, input().strip().split(' '))
  time_table.append([s, f])

time_table.sort(key=lambda x: (x[1], x[0])) # 종료 시간이 같을 경우 시작 시간 오름차순 정렬도 추가 (1순위: 종료 시간, 종료 시간이 같은 경우엔 2순위로 앞자리 오름차순)

start = 0
end = 0
cnt = 0

for element in time_table:
  if element[0] >= end: # 지금 확인하고 있는 회의의 시작 시간이 이전의 종료 시간보다 크거나 같다면 (이때만 회의 진행 가능!)
    end = element[1]
    cnt += 1

print(cnt)