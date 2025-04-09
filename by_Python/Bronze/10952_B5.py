'''
  A+B 출력... 간단하지?
'''

while(True): #입력으로 '0 0' 들어오기 전까진 무한반복
  [A, B] = list(map(int, input().split(' ')))
  if A == 0 & B == 0: # '0 0'이 값으로 들어왔으면
    break
  print(A+B)