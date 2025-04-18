# 순열 구현
import sys
input = sys.stdin.readline

N, M = map(int, input().split())

num_list = [i + 1 for i in range(N)]  # 1부터 N까지 숫자
combination = [0] * M
is_selected = [False] * N

def permutation(depth):
    if depth == M: # 기저 조건 도달
        print(' '.join(map(str, combination)))
        return

    for i in range(N):
        if is_selected[i]:
            continue
        is_selected[i] = True
        combination[depth] = num_list[i]
        permutation(depth + 1)
        is_selected[i] = False  # 백트래킹

permutation(0)


# 조합 구현
N, M = map(int, input().split())
num_list = list(map(int, input().split()))

# 오름차순 정렬
num_list.sort()
combination = []

def Combination(depth, start):
    if depth == M:
        print(' '.join(map(str, combination)))
        return

    for i in range(start, N):
        combination.append(num_list[i])
        Combination(depth + 1, i + 1)
        combination.pop()  # 백트래킹

Combination(0, 0)