'''
  N!를 출력하는 프로그램 작성
  N은 20보다 작거나 같으므로.. 크게 관계 없음!
'''

def factorial(num):
  if num == 0:
    return 1
  return num*factorial(num-1)

N = int(input())
print(factorial(N))
