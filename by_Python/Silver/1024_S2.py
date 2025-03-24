def main():
    #N, L 입력 받기
    N, L = map(int, input().split(' '))

    #등비수열의 합 공식을 변형해서 풀어보자
    length = L
    first_value = -1

    #길이(length)가 100 이하인 경우에만 고려해야 한다
    while length <= 100:
        check = ((2*N)-(length**2)+length)%(2*length) #계산 결과인 check가 나머지 값이 0이어야 한다(나머지가 존재하는 경우 조건을 만족하는 첫째항이 존재하지 않는 것)
        if check == 0:
            first_value = ((2*N)-(length**2)+length)//(2*length)
            if first_value < 0: #음수로 시작할 경우
                first_value = -1
                break
            break
        else:
            length += 1
    
    if first_value == -1: #해당하는 첫째 항을 찾지 못한 경우 -> '-1' 출력
        print(-1)
    else:
        #결과 리스트를 만든다
        answer = []
        for _ in range(length):
            answer.append(first_value)
            first_value += 1

        #결과 출력
        print(" ".join(map(str, answer))) #요소를 문자열로 변환 후 공백으로 연결


if __name__ == '__main__':
    main()