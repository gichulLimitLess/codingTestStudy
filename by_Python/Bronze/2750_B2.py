'''
  수 정렬하기
'''

N = int(input())
num_list = []

for _ in range(N):
  a = int(input())
  num_list.append(a)

num_list.sort()

for e in num_list:
  print(e)