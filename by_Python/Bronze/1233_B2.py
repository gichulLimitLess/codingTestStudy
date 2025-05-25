'''
  주사위
  --> S1, S2은 최대 20, S3는 최대 40 => 최대 16000번? 걍 브루트포스 레츠고
'''

S1, S2, S3 = map(int, input().split(' '))

dict = {}

# 3중 for문 돌리면 됨 (이거 해봐야.. 16000번 밖에 안돈다)
for i in range(1, S1+1):
  for j in range(1, S2+1):
    for k in range(1, S3+1):
      if i+j+k in dict: # 계산값이 이미 dict에 있다면
        dict[i+j+k] = dict.get(i+j+k) + 1
      else: # 없다면, 새로 추가
        dict[i+j+k] = 1
        
max_val = 0 # value는 "나온 횟수(value)"를 의미
answer = 100

for key, value in dict.items(): # dict 순회하면서 값 비교
  if value > max_val:
    max_val = value
    answer = key

print(answer) # 결과 출력