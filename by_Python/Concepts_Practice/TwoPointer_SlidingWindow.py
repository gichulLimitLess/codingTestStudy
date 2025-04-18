# Two-Pointer 사용 예제
def two_pointer_sum(arr, target):
    arr.sort()  # 배열이 정렬되어 있어야 투 포인터 사용 가능
    left, right = 0, len(arr) - 1  # 양 끝에서 시작

    while left < right:
        total = arr[left] + arr[right]

        if total == target:  # 합이 목표값이면 정답
            return (arr[left], arr[right])
        elif total < target:  # 합이 작으면 왼쪽 포인터를 오른쪽으로 이동
            left += 1
        else:  # 합이 크면 오른쪽 포인터를 왼쪽으로 이동
            right -= 1

    return None  # 없을 경우


# Sliding-Window 사용 예제
def max_sum_fixed_window(arr, k):
    window_sum = sum(arr[:k])  # 첫 윈도우의 합
    max_sum = window_sum  # 최대합 초기화

    # 윈도우를 한 칸씩 이동하면서 계산
    for i in range(k, len(arr)):
        window_sum += arr[i] - arr[i - k]  # 오른쪽 요소 추가, 왼쪽 요소 제거
        max_sum = max(max_sum, window_sum)  # 최대값 갱신

    return max_sum