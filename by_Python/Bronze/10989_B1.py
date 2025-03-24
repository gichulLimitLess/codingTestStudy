import sys

#카운팅 정렬을 사용해서 문제를 해결(gpt의 도움을 받음)
def main():
    input = sys.stdin.readline  # 한 줄씩 입력받기
    N = int(input().strip())  # 첫 번째 줄: 수의 개수
    count = [0] * 10001  # 숫자 범위: 1~10,000

    # 입력된 숫자의 등장 횟수 기록
    for _ in range(N):
        num = int(input().strip())
        count[num] += 1

    # 정렬된 결과를 한 줄씩 출력
    for i in range(1, 10001):
        if count[i] > 0:
            for _ in range(count[i]):
                sys.stdout.write(f"{i}\n")

if __name__ == '__main__':
    main()
