'''
  두 개의 자연수 N, K가 주어졌을 때, N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성
  1 <= N <= 10,000 / 1 <= K <= N
  출력: N의 약수들 중 K번째로 작은 수를 출력 / 만일 N의 약수의 개수가 K개보다 적어서 K번째 약수가 존재하지 않을 경우에는 0을 출력
'''

[N, K] = map(int, input().split(' '))

num = 1 #현재 검사중인 약수 기록
answer = 1 #순서 기록

#약수는 반드시 N보다 작거나 같아야 한다
while num <= N:
  if N % num == 0: #현재 num이 N의 약수인 경우
    if answer == K: #현재 약수가 K번째 약수인 경우
      break
    num += 1
    answer += 1
  else:
    num += 1

if(num > N): #여기로 왔을 때, num이 N보다 큰 경우는 못 찾은 거다
  print(0)
else:
  print(num)