def main():
    arr = []

    #28명의 출석번호를 모두 받아서 arr에 push
    for i in range(28):
        a = int(input())
        arr.append(a)

    arr.sort() #오름차순으로 정렬
    target = [] #과제 안 낸 두 친구의 출석번호 저장

    #1부터 30까지 검사하며 없는 번호 찾기
    for num in range(1, 31): #1부터 30까지
        if num not in arr: #"not in"이라는 것도 있으니 참고
            target.append(num)
        
    
    print(target[0])
    print(target[1])


#Python 스크립트를 실행하면 해당 파일이 Main 프로그램으로 실행되는 경우, 특별한 __name__ 변수에 '__main__'이라는 값이 할당됨
#이를 활용하여, 해당 스크립트가 "Main으로 실행될 때만" 특정 코드를 실행하도록 만들 수 있음
if __name__ == '__main__':
    main()