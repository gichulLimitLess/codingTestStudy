def calc(n, memo):
    if memo[n][0] != 0 or memo[n][1] != 0:  # 이미 계산된 값이 있다면 반환(중복계산 방지)
        return memo[n]
    
    if n == 0:  # f(0)
        memo[n] = [1, 0]
    elif n == 1:  # f(1)
        memo[n] = [0, 1]
    else:
        left = calc(n-1, memo) #왼쪽 값 계산(재귀호출)
        right = calc(n-2, memo) #오른쪽 값 계산(재귀호출)
        memo[n] = [left[0] + right[0], left[1] + right[1]]  # 0, 1 호출 횟수 합계
    
    return memo[n] #메모된 값 return

def main():
    T = int(input()) #테스트 케이스 개수 T 입력 받기
    testCase_arr = []
    for _ in range(T): #T개의 N 값을 입력 받기
        N = int(input())
        testCase_arr.append(N)
    
    memo = [[0,0] for _ in range(41)] #횟수 메모를 위한 리스트(0~39)

    #모든 테스트 케이스에 대해 계산 수행
    results = []
    for N in testCase_arr:
        calc(N, memo) #N에 대한 결과를 메모에 저장
        results.append(memo[N]) #해당 N의 결과를 저장
    
    #출력
    for result in results:
        print(result[0], result[1]) #0 호출 횟수, 1 호출 횟수 출력

#DFS와 메모이제이션을 통해 시간제한에 걸리지 않는 알고리즘의 큰 틀은 생각했으나,
#이를 Python에서 구현하는 방법에 대해 생각해 내지 못함
#위 알고리즘의 구현에 대해 GPT의 도움을 받음

if __name__ == '__main__':
    main()