def main():
    N = int(input())  # 입력받은 N
    F = int(input())  # 입력받은 F

    # 뒤 두 자리를 00으로 설정
    N = (N // 100) * 100

    # 00부터 99까지 반복하면서 F로 나누어 떨어지는지 확인
    for i in range(100):
        if (N + i) % F == 0:
            print(f"{i:02}")  # 두 자리 형식으로 출력
            break

if __name__ == '__main__':
    main()