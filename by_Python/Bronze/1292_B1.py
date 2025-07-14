'''
  쉽게 푸는 문제
'''

A, B = map(int, input().split(' '))

# 수열 만들기
arr = []
now_num = 1
for _ in range(1000): # 끝이 최대 1000, 1000까지만 만들자
  for _ in range(now_num):
    arr.append(now_num)
  now_num += 1


# 계산하기
answer = 0
for i in range(A-1, B):
  answer += arr[i]

# 답 출력하기
print(answer)