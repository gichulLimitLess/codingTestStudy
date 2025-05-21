'''
  어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라 함
  Q. 자연수 N이 주어졌을 때, N의 가장 작은 생성자를 구해내는 프로그램
    -> 답 출력 / 생성자가 없는 경우에는 0을 출력
'''

N = int(input())

def digit_sum(n):
    return sum(map(int, str(n)))

for i in range(1, N + 1):
    if i + digit_sum(i) == N:
        print(i)
        break
else:
    print(0)
