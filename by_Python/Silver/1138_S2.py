'''
  한 줄로 서기
'''

N = int(input()) # N은 10보다 작거나 같은 자연수
info = list(map(int, input().split(' ')))
array = [0 for _ in range(N)]

for i in range(N): # 키가 작은 사람부터 순차적으로 삽입
  cnt = 0
  for j in range(N): # array 순회, array가 0인 경우는, 무조건 지금 넣으려 하는 것보다 큰 게 들어감
    if cnt == info[i] and array[j] == 0: # 넣을 위치까지 왔다면 (비어있어야 한다)
      array[j] = str(i+1)
      break
    
    if array[j] == 0: # 자기보다 큰 게 들어간 자리라면
      cnt += 1

print(' '.join(array)) # 결과 출력