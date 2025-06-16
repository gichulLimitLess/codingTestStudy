'''
  인공지능 시계
'''

A, B, C = map(int, input().split())
D = int(input())

# 전체 초 단위로 환산
total_seconds = A * 3600 + B * 60 + C + D

# 다시 시, 분, 초로 환산
A = (total_seconds // 3600) % 24
B = (total_seconds % 3600) // 60
C = total_seconds % 60

print(A, B, C)
