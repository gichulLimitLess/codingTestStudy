'''
  [상근이의 친구들]
'''

cnt = 1

while True:
  val = input()

  if val == '0 0': # '0 0'이 들어오면 종료
    break

  M, F = map(int, val.split(' '))
  print(M + F)

