'''
  숫자의 갯수
'''

A = int(input())
B = int(input())
C = int(input())

res_str = str(A*B*C) # 어떤 숫자가 쓰였는지 확인을 위해 문자열로 변환
answer = [0 for _ in range(10)] # 각 숫자의 count를 위한 배열

for e in res_str: # 문자열의 요소들을 하나씩 검토한다
  if e == '0':
    answer[0] += 1
  elif e == '1':
    answer[1] += 1
  elif e == '2':
    answer[2] += 1
  elif e == '3':
    answer[3] += 1
  elif e == '4':
    answer[4] += 1
  elif e == '5':
    answer[5] += 1
  elif e == '6':
    answer[6] += 1
  elif e == '7':
    answer[7] += 1
  elif e == '8':
    answer[8] += 1
  elif e == '9':
    answer[9] += 1

for i in range(10): # 결과 출력
  print(answer[i])