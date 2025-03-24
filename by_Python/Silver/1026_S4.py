def main():
    #길이 N, 정수 배열 A, B 입력받기
    N = int(input())
    A = list(map(int, input().split()))
    B = list(map(int, input().split()))
    B_copy = B[:] #B의 독립적인 복사본 B_copy를 만들기 위해 얕은 복사 수행
    index_order = []

    #배열 B에서 큰 원소부터 작은 원소까지(내림차순)의 인덱스 순서를 알아내야 함
    while True:
        if all(element == -1 for element in B_copy): #B의 모든 원소가 -1인 경우(인덱스 탐색 완료했으면)
            break

        max_value = max(B_copy) #B에서 최댓값을 뽑아낸다
        max_index = B_copy.index(max_value) #최댓값이 있는 index를 반환한다(여러 개일 경우 여러 값들 중 가장 왼쪽 인덱스 반환)
        B_copy[max_index] = -1 #탐색 완료했다는 flag값 표시
        index_order.append(max_index) #순서대로 때려 넣는다

    A.sort() #A를 오름차순으로 정렬(작은 것부터 큰 순으로)
    
    #최솟값 S 계산
    calc = 0
    for i in range(N):
        calc += A[i] * B[index_order[i]]

    print(calc)

if __name__ == '__main__':
    main()