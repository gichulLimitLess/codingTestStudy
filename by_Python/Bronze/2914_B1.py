'''
  저작권
'''

A, i = map(int, input().split(' '))

if A == 1:
  print(i)
else:
  print(A*(i-1) + 1)