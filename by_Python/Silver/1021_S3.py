def main():
    # N, M 입력 받기
    N, M = map(int, input().split())
    # 뽑아내려 하는 수의 위치 입력 받기
    location_arr = list(map(int, input().split()))

    # 초기 큐 생성 (1부터 N까지 숫자)
    queue = list(range(1, N + 1))
    calc_count = 0  # 총 연산 횟수

    for target in location_arr:
        # 현재 위치에서 타겟까지의 거리 계산
        left_dist = queue.index(target)
        right_dist = len(queue) - left_dist

        # 최소 연산 선택
        if left_dist <= right_dist:  # 왼쪽으로 이동이 더 적은 경우
            # 왼쪽으로 회전
            for _ in range(left_dist):
                queue = queue[1:] + queue[:1]
            calc_count += left_dist
        else:  # 오른쪽으로 이동이 더 적은 경우
            # 오른쪽으로 회전
            for _ in range(right_dist):
                queue = queue[-1:] + queue[:-1]
            calc_count += right_dist

        # 첫 번째 요소 제거
        queue = queue[1:]

    print(calc_count)

#GPT의 도움을 받아 해결
#틀린 이유: 리스트 슬라이싱을 적절히 사용해야 함
#틀린 이유 2: 인덱싱을 하는 데에 있어 너무 헷갈려 함(거리 계산 하는데에 있어 머리가 꼬임)

if __name__ == '__main__':
    main()
