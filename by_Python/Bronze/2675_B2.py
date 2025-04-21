'''
  문자열 S를 입력 받은 후, 각 문자를 R번 반복해 새 문자열 P를 만들어라
'''

T = int(input())
res = []
for _ in range(T): # 각 테스트 케이스에 대해 반복
  R, S = input().split(' ')
  R = int(R)
  a = ''
  for element in S: #문자열 반복하며 
    a += element*R #문자열에다가 값을 지속적으로 붙인다
  
  res.append(a)

print('\n'.join(res))