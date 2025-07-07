'''
  주사위 게임
'''

rounds = int(input())
a_score = 100
b_score = 100
for _ in range(rounds):
  a, b = map(int, input().split(' '))
  if a > b: # 창영이가 이겼으면
    b_score -= a
  elif a < b: # 상덕이가 이겼으면
    a_score -= b
  else: # 둘이 점수가 같으면
    continue # 아무도 점수를 잃지 않는다

print(a_score)
print(b_score)