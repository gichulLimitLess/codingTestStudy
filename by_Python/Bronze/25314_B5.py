'''
  4바이트 정수까지 저장할 수 있는 정수 자료형: long int
'''

N = int(input())
repeat_count = 0

if N % 4 != 0: # 나머지가 존재하는 경우
  repeat_count = N // 4 + 1
else:
  repeat_count = N // 4

answer = ""
for _ in range(repeat_count):
  answer += "long "

answer += "int "
print(answer)