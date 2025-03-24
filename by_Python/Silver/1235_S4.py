def main():
    N = int(input()) #학생 수 N 입력받기
    arr = []
    for _ in range(N): #학생 번호 입력 받기
        x = input() #문자열 입력 받기
        arr.append(x) #배열에 갖다 붙이기
    
    k = 1 #뒤의 k 자리에 대해선 1부터 시작
    check_arr=[]
    
    while True: #우선 무한 루프를 돌린다
        for element in arr: #배열 하나씩 보면서 탐색 시작
            if element[len(element)-k:] not in check_arr: #특정 위치부터 끝까지의 string 슬라이싱
                check_arr.append(element[len(element)-k:])
            else:
                k += 1 #뒤의 k 자리수에 대한 값 +1
                check_arr=[] #체크용 배열 초기화
                break

        if len(check_arr) == len(arr): #체크용 배열이 입력받은 학생 번호 배열의 길이와 같아지면
            break #무한 루프 탈출
    
    print(k)


#Python 스크립트를 실행하면 해당 파일이 Main 프로그램으로 실행되는 경우, 특별한 __name__ 변수에 '__main__'이라는 값이 할당됨
#이를 활용하여, 해당 스크립트가 "Main으로 실행될 때만" 특정 코드를 실행하도록 만들 수 있음
if __name__ == '__main__':
    main()