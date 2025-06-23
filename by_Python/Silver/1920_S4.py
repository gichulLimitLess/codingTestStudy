'''
  수 찾기
  --> N개의 정수 A[1], A[2], ... , A[N], 이 안에 X라는 정수가 존재하는가..?
  (1 <= N <= 100,000)
'''

import sys

input = sys.stdin.readline
write = sys.stdout.write

N = int(input().strip())
A = list(map(int, input().strip().split(' ')))
M = int(input().strip())
check_list = list(map(int, input().strip().split(' ')))

# 최대 10만개의 숫자 중에서, 주어진 10만개가 그 안에 있는 지 확인하려면..
# Sequential Search하면.. 10만 x 10만 -> 100억? 에바입니다.
# 그래서 하겠다는 것이.. 이분탐색

A.sort() # 오름차순 정렬 (이분탐색을 위해서 정렬 필요)
answer_list = []

for element in check_list: # check_list 순회
  start = 0
  end = len(A) - 1

  while start <= end: # start가 end보다 작을 때만
    point_idx = (start + end) // 2
    if A[point_idx] > element: # element가 기준 값보다 작으면
      end = point_idx - 1
    elif A[point_idx] < element: # element가 기준 값보다 크면
      start = point_idx + 1
    elif A[point_idx] == element: # 값을 찾았으면
      answer_list.append(str(1))
      break

  if start > end:
    answer_list.append(str(0))

for i in range(M): # 빠른 출력을 위해 write() 사용
  write(answer_list[i] + '\n')
