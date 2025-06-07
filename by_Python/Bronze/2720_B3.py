'''
  세탁소 사장 동혁
  - 쿼터: 0.25$ / 다임: 0.1$ / 니켈: 0.05$ / 페니: 0.01$
'''

T = int(input())

for _ in range(T):
  input_val = int(input())
  Q = input_val // 25
  D = (input_val - (Q*25)) // 10
  N = (input_val - (Q*25 + D*10)) // 5
  P = (input_val - (Q*25 + D*10 + N*5)) // 1 
  print(f"{Q} {D} {N} {P}")

