import sys
input = sys.stdin.readline

K, N = map(int, input().split())
num_list = [int(input()) for _ in range(K)]

def count_lans(cut_len): # 랜선의 갯수를 세는 count_lans
    return sum(x // cut_len for x in num_list)

left, right = 1, max(num_list)
answer = 0

while left <= right: # left가 right보다 작거나 같은 경우에만..
    mid = (left + right) // 2
    if count_lans(mid) >= N: # mid 길이를 기준으로 랜선의 갯수를 계산했을 때, 그게 N보다 크거나 같은 경우
        answer = mid  # 현재 길이로 충분하니까 더 큰 길이 시도
        left = mid + 1
    else:
        right = mid - 1

print(answer)