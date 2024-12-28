def tableDecode(color, i): #입력된 색깔 값을 바탕으로 디코딩
    if color == 'black':
        if i < 2: return 0
        else: return 1
    elif color == 'brown':
        if i < 2: return 1
        else: return 10
    elif color == 'red':
        if i < 2: return 2
        else: return 100
    elif color == 'orange':
        if i < 2: return 3
        else: return 1000
    elif color == 'yellow':
        if i < 2: return 4
        else: return 10000
    elif color == 'green':
        if i < 2: return 5
        else: return 100000
    elif color == 'blue':
        if i < 2: return 6
        else: return 1000000
    elif color == 'violet':
        if i < 2: return 7
        else: return 10000000
    elif color == 'grey':
        if i < 2: return 8
        else: return 100000000
    elif color == 'white':
        if i < 2: return 9
        else: return 1000000000

def main():
    color = ['','','']
    arr = ['', '', '']
    value = 0 #앞의 2개 숫자 값 붙여서 여기다 사용할 것임
    for i in range(3): #세 번 입력 받기
        color[i] = input()
    
    for i in range(3): #디코딩
        if i < 2: #앞의 2개 값은 str로 변환해서 하나씩 저장
            arr[i] = str(tableDecode(color[i], i))
        else: #맨 뒤 값에 대해선 그냥 int로 저장(나중에 계산할 때 편하려고)
            arr[i] = tableDecode(color[i], i)

    value = int(arr[0] + arr[1]) #앞의 2개 숫자 값 붙여서 value에 저장
    print(value*arr[2])

#위처럼 풀어도 되지만, 색에 대한 배열을 만들고, 각 색이 저장되어 있는 배열의 인덱스를 이용해서 좀 더 간단히 푸는 방법도 생각할 수 있음!


#Python 스크립트를 실행하면 해당 파일이 Main 프로그램으로 실행되는 경우, 특별한 __name__ 변수에 '__main__'이라는 값이 할당됨
#이를 활용하여, 해당 스크립트가 "Main으로 실행될 때만" 특정 코드를 실행하도록 만들 수 있음
if __name__ == '__main__':
    main()