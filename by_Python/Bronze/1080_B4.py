#해당 문제가 Greedy 알고리즘의 도움을 받아야 한다는 점과 문제 풀이에 대해 gpt의 도움을 받음
#지정된 좌표 (x, y)에서 3x3 부분 행렬의 모든 원소를 뒤집는 함수 flip_3x3
def flip_3x3(matrix, x, y):
    for i in range(x, x + 3):
        for j in range(y, y + 3):
            matrix[i][j] = 1 - matrix[i][j]

def main():
    # 입력 받기
    N, M = map(int, input().split())
    A = [list(map(int, input())) for _ in range(N)]
    B = [list(map(int, input())) for _ in range(N)]

    # 뒤집기 횟수
    flip_count = 0

    # 3x3 뒤집기를 수행할 수 있는 범위 내에서 처리
    for i in range(N - 2):
        for j in range(M - 2):
            # A와 B의 값이 다르면 3x3 뒤집기
            if A[i][j] != B[i][j]:
                flip_3x3(A, i, j)
                flip_count += 1

    # A와 B가 같은지 확인
    if A == B:
        print(flip_count)
    else:
        print(-1)

if __name__ == "__main__":
    main()

