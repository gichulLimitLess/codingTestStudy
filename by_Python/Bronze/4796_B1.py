'''
  캠핑
'''
case_num = 1
while True: # 0 0 0 입력될 때까지 우선 계속 한다
  L, P, V = map(int, input().split(' '))  
  if L == 0 and P == 0 and V == 0: # 이때 탈출
    break 

  answer = 0
  answer += ((V // P) * L)
  if V % P >= L: # 나머지 연산 처리한 것이 L보다 크거나 같으면
    answer += L
  else:
    answer += V % P
  
  print(f"Case {case_num}: {answer}")
  case_num += 1
