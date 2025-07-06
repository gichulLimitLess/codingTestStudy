import sys

# N은 40보다 작거나 같은 자연수 또는 0
# 0과 1에 대한 초기값 설정
zeros = [1, 0]
ones = [0, 1]

# DP를 위한 리스트 채우기 (최대 40까지)
for i in range(2, 41):
    zeros.append(zeros[i-1] + zeros[i-2])
    ones.append(ones[i-1] + ones[i-2])

# 테스트 케이스 수 입력
T = int(sys.stdin.readline())

for _ in range(T):
    N = int(sys.stdin.readline())
    print(zeros[N], ones[N])
