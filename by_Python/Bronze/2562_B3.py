import sys

input = sys.stdin.readline

num_list = []

#9개의 자연수 입력 받기
for _ in range(9):
  num_list.append(int(input().strip()))

isWhere = 0

max_val = max(num_list) # num_list에서 최댓값 뽑아내기
maxVal_isWhere = num_list.index(max_val) #최댓값의 위치 찾아내기

print(max_val)
print(maxVal_isWhere+1)