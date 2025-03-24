def main():
    count = int(input()) #진짜 약수 개수 입력받기
    arr = list(map(int, input().split())) #배열의 요소를 입력받는다

    #가장 작은 약수와 가장 큰 약수를 곱하면, N을 구할 수 있다
    #1과 N이 아닌 경우만 고려했으므로, 서로소는 고려하지 않는다(len(arr) == 1인 경우 고려 X)
    minValue = min(arr)
    maxValue = max(arr)
    print(minValue*maxValue)


#Python 스크립트를 실행하면 해당 파일이 Main 프로그램으로 실행되는 경우, 특별한 __name__ 변수에 '__main__'이라는 값이 할당됨
#이를 활용하여, 해당 스크립트가 "Main으로 실행될 때만" 특정 코드를 실행하도록 만들 수 있음
if __name__ == '__main__':
    main()