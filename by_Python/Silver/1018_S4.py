def calc(board, y, x):
    # 두 가지 체스판 패턴 정의
    pattern1 = "WBWBWBWB"
    pattern2 = "BWBWBWBW"
    count1 = count2 = 0

    # 8x8 영역 탐색
    for i in range(8):
        for j in range(8):
            expected1 = pattern1 if i % 2 == 0 else pattern2 #Python의 삼항 연산자 활용
            expected2 = pattern2 if i % 2 == 0 else pattern1

            # 현재 칸이 두 가지 패턴과 일치하는지 확인
            if board[y + i][x + j] != expected1[j]:
                count1 += 1
            if board[y + i][x + j] != expected2[j]:
                count2 += 1

    # 두 패턴 중 최소 칠해야 할 수 반환
    return min(count1, count2)


def main():
    N, M = map(int, input().split())  # N, M 입력 받기
    board = [input() for _ in range(N)]  # 체스판 입력

    min_value = float('inf')  # 칠해야 할 최소값 초기화

    # 모든 8x8 영역 탐색
    for y in range(N - 7):
        for x in range(M - 7):
            value = calc(board, y, x)
            if min_value > value:
                min_value = value

    print(min_value)

#GPT의 도움을 받음
#불필요한 값 변경을 제거
#명확한 비교 방식을 도입(체스판은 두 가지 기준 패턴만 존재한다는 것을 간과..)
#파이썬의 유용한 함수들을 잘 몰랐음(리스트 컴프리헨션 등..)

if __name__ == '__main__':
    main()