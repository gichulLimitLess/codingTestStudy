'''
  수빈이와 수열
'''

N = int(input())
B_list = list(map(int, input().split(' ')))
A_list = []

prev = 0

for i in range(N):
  answer = (B_list[i] * (i+1))
  print("answer: ", answer)
  answer -= prev
  A_list.append(str(answer))
  prev = answer

print(' '.join(A_list))