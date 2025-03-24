def main():
    N = int(input()) #배열 A의 크기 N 입력받기
    P = [-1 for _ in range(N)] #N 크기의 배열 P(우선 0으로 초기화, 추후 값 집어넣을 것임)
    A = list(map(int, input().split(' '))) #배열 A 입력받기

    minValue = 1001
    minValueIndex = 0
    count = 0

    while True:
        if -1 not in P: #P에 -1이 이제 없으면 (P에 모든 값이 할당 됐으면)
             break #무한루프 탈출

        for idx, element in enumerate(A): #A 배열 탐색
            if minValue > element and element != -100: #현재 저장되어 있는 최솟값이 현재 비교중인 값보다 큰 경우
                minValue = element
                minValueIndex = idx
        
        A[minValueIndex] = -100 #이미 표기 됐다는 flag값(-100) 배열 A에 표시
        P[minValueIndex] = count #P 배열 값 할당
        minValue = 1001 #minValue 초기화
        count += 1 #count 증가
    
    print(" ".join(map(str, P))) #요소를 문자열로 변환 후 공백으로 연결

if __name__ == '__main__':
    main()