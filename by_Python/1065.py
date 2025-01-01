def main():
    N = int(input()) #숫자 입력받기(1<=N<=1000)
    answer = 0 #정답을 넣어놓을 변수 answer

    if 1<=N<100: #1. N이 1 이상 100 미만인 경우
        answer = N 
    elif 100<=N<=1000: #2. N이 100 이상 1000 미만인 경우
        count = 99 #1~99까지는 무조건 한수
        for i in range(100, N+1):
            #각 자릿수 값을 우선 추출한다
            first = i // 100
            second = (i % 100) // 10
            third = i % 10
            if second == (first + third)/2: #등차중항일 경우
                count += 1

        answer = count
    
    print(answer)


#Python 스크립트를 실행하면 해당 파일이 Main 프로그램으로 실행되는 경우, 특별한 __name__ 변수에 '__main__'이라는 값이 할당됨
#이를 활용하여, 해당 스크립트가 "Main으로 실행될 때만" 특정 코드를 실행하도록 만들 수 있음
if __name__ == '__main__':
    main()