'''
  0=not cute / 1=cute
'''

N = int(input())

cnt = 0
for _ in range(N):
  answer = int(input())
  if answer == 0: # 귀엽지 않다고 했을 경우
    cnt += 1

if cnt > N - cnt:
  print("Junhee is not cute!")
else:
  print("Junhee is cute!")