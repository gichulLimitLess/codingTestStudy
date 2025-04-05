'''
  두 문자열 A, B가 주어졌을 때,
  A의 길이가 B의 길이와 같아질 때까지 다음과 같은 연산을 할 수 있다.
  1. A의 앞에 아무 알파벳이나 추가한다.
  2. A의 뒤에 아무 알파벳이나 추가한다.
  ==> A와 B의 길이가 같으면서, A와 B의 차이를 최소로 하는 프로그램?
  (A, B의 길이는 최대 50, A의 길이 < B의 길이, 알파벳 소문자..)

  [풀이]
  -> A의 양 끝으로는, 원하는 거 아무거나 넣을 수 있다.
  -> A와 가장 비슷하게 생긴 "연속된" 문자열을 찾아야 한다
  -> 
'''

# [A, B] = input().split(' ')

# min_val = 1000

# for i in range(len(B) - len(A) + 1):
#   sub = B[i:i+len(A)] #sub는 A와 길이가 같은 문자열
#   diff = sum(1 for a, b in zip(A, sub) if a != b) # a와 B가 다를 때, 1을 추가한다 (리스트 컴프리헨션)
#   min_val = min(diff, min_val)

# print(min_val)

[A, B] = map(list, input().split(' '))

min_val = 10000000

for i in range(len(B) - len(A) + 1): # B를 전체적으로 돌아가며 검사
  diff = 0
  for j in range(len(A)): #substring 검사
    if B[i+j] != A[j]:
      diff += 1

  min_val = min(diff, min_val)

print(min_val)