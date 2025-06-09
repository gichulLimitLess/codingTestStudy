'''
  소인수분해
'''

# import sys

# write = sys.stdout.write

# N = int(input()) # N의 최대 크기는 10,000,000

# divisor = 2

# # 소수가 아무리 크다고 해도.. O(N)이라 하면.. 충분히 시간 초과에 안걸릴 수 있음!
# while N >= 2:
#   if N % divisor == 0:
#     write(f"{divisor}\n")
#     N = N // divisor
#     divisor = 2
#   else: # 안 나눠 떨어지면.. 나누는 수를 키워야 함
#     divisor += 1

import sys
input = sys.stdin.readline
write = sys.stdout.write

N = int(input())
divisor = 2

# √N까지만 나누고 이후에는 N 자체가 소수
while divisor * divisor <= N:
    while N % divisor == 0:
        write(f"{divisor}\n")
        N //= divisor
    divisor += 1

# 남은 수가 1보다 크면 그 자체가 소수
if N > 1:
    write(f"{N}\n")
