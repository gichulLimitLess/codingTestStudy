'''
 방 번호
'''

N = input()
counts = [0] * 10  # 0부터 9까지 숫자별 개수를 저장할 리스트

for digit in N:
    num = int(digit)
    if num == 6 or num == 9:
        counts[6] += 1  # 6과 9를 하나로 취급
    else:
        counts[num] += 1

# 6과 9는 합쳐서 계산한 후 반올림
counts[6] = (counts[6] + 1) // 2  # 정수 나눗셈 반올림

print(max(counts))  # 가장 많이 필요한 세트 수
