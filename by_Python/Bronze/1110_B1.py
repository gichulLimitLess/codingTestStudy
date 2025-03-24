#계산을 때리는 함수 calc(지속적으로 계산 수행)
#N은 정답, a는 들어오는 수, count는 세어지는 횟수
def calc(a, N, count):
    if a < 10: #10보다 작은 경우에는
        x = a #x는 a와 동일
        new_value = a * 10 + x #새로운 값 계산 (a를 10의 자리로 이동)
        count += 1 #count 증가
        if new_value == N: #정답과 같을 경우에는
            return count
        else: #정답과 다를 경우에는
            return calc(new_value, N, count)
    elif a >= 10: #10보다 큰 경우에는
        x = (a//10) + (a%10) #각 자리 숫자 합
        count += 1 #count 증가
        if x >= 10:
            new_value = (a % 10) * 10 + (x % 10) #새로운 값 계산
            if new_value == N: #정답과 같을 경우에는
                return count
            else: #정답과 다를 경우에는
                return calc(new_value, N, count)
        elif x < 10:
            new_value = (a % 10) * 10 + x  # 새로운 값 계산
            if new_value == N: #정답과 같을 경우에는
                return count
            else: #정답과 다를 경우에는
                return calc(new_value, N, count)

#int와 str 변환을 통해 두 자리 정수의 각 자리에 접근하는 방식을 사용하려 했으나
#위와 같이 10, 100 등의 자릿수로 나누어 추출하는 방법이 성능 면에서 아주 미세하게 효율적일 수 있음
#그리고, 재귀 호출 시 반환값을 호출한 함수로 전달하지 않을 경우, 상위 호출자가 None을 출력할 수도 있으니 위처럼 코드 짜야 함!

def main():
    N = int(input()) # N 입력 (이어 붙이거나 떼내기 편하도록 우선은 int 변환 X)
    count = 0
    print(calc(N, N, count))

#Python 스크립트를 실행하면 해당 파일이 Main 프로그램으로 실행되는 경우, 특별한 __name__ 변수에 '__main__'이라는 값이 할당됨
#이를 활용하여, 해당 스크립트가 "Main으로 실행될 때만" 특정 코드를 실행하도록 만들 수 있음
if __name__ == '__main__':
    main()