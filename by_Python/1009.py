def last_digit(a, b):
    # 각 숫자의 패턴을 저장하는 딕셔너리
    patterns = {
        0: [0],
        1: [1],
        2: [2, 4, 8, 6],
        3: [3, 9, 7, 1],
        4: [4, 6],
        5: [5],
        6: [6],
        7: [7, 9, 3, 1],
        8: [8, 4, 2, 6],
        9: [9, 1]
    }

    # a의 마지막 자리 숫자를 가져옴
    last_digit_a = a % 10

    # 해당 숫자의 패턴 가져오기
    pattern = patterns[last_digit_a]

    # 지수 b가 0일 경우 항상 1
    if b == 0:
        return 1

    # 패턴 길이를 기준으로 b-1의 나머지를 구해 패턴의 인덱스 결정
    index = (b - 1) % len(pattern)
    
    # 결과 반환, 0인 경우는 10으로 반환
    result = pattern[index]
    return result if result != 0 else 10

def main():
    # 테스트 케이스 입력 및 처리
    T = int(input())
    answer = []
    for _ in range(T):
        a, b = map(int, input().split())
        answer.append(last_digit(a, b))
    
    # 정답 출력
    for idx in range(T):
        print(answer[idx])

if __name__ == '__main__':
    main()
