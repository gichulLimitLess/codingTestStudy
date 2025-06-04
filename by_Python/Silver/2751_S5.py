'''
  수 정렬하기 2
'''

import sys

input = sys.stdin.readline
write = sys.stdout.write

N = int(input().strip())
num_list = []

for _ in range(N):
  a = int(input().strip())
  num_list.append(a)

num_list.sort()

for num in num_list:
  write(f"{num}\n")