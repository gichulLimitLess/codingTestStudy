'''
  TGN
'''

N = int(input())

for _ in range(N):
  r, e, c = map(int, input().split(' '))
  if r < e-c: # 광고를 해야 하는 경우
    print("advertise")
  elif r > e-c: # 광고를 하면 안되는 경우
    print("do not advertise")
  else:
    print("does not matter")