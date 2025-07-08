'''
  사분면
  --> 각 사분면과 축에 점이 몇 개 있는지를 예제 출력과 같은 형식으로 출력
'''
answer_list = [0, 0, 0, 0, 0]

n = int(input())
for _ in range(n):
  a, b = map(int, input().split(' '))
  if a == 0 or b == 0: # x, y축 2개 중 하나라도 축 위에 있다면
    answer_list[4] += 1
  elif a > 0 and b > 0: # 1사분면
    answer_list[0] += 1
  elif a < 0 and b > 0: # 2사분면
    answer_list[1] += 1
  elif a < 0 and b < 0: # 3사분면
    answer_list[2] += 1
  elif a > 0 and b < 0: # 4사분면
    answer_list[3] += 1

print(f"Q1: {answer_list[0]}")
print(f"Q2: {answer_list[1]}")
print(f"Q3: {answer_list[2]}")
print(f"Q4: {answer_list[3]}")
print(f"AXIS: {answer_list[4]}")

