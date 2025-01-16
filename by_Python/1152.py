def main():
    # 문자열 입력받기(문자열을 strip()을 이용해 양쪽 공백을 제거)
    input_string = input().strip()  

    # 공백 기준으로 단어 나누기
    words = input_string.split()

    # 단어의 개수 출력
    print(len(words))

#문자열에 관한 Python 메소드를 제대로 숙지할 필요가 있음
    

#Python 스크립트를 실행하면 해당 파일이 Main 프로그램으로 실행되는 경우, 특별한 __name__ 변수에 '__main__'이라는 값이 할당됨
#이를 활용하여, 해당 스크립트가 "Main으로 실행될 때만" 특정 코드를 실행하도록 만들 수 있음
if __name__ == '__main__':
    main()