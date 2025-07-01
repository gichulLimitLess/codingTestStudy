'''
  기타줄
'''

N, M = map(int, input().split(' '))
package_price = [] # 패키지 가격
each_price = [] # 낱개 가격

for _ in range(M):
  a, b = map(int, input().split(' '))
  if a <= b*6: # 이 경우는 패키지 가격이 더 싼거임
    package_price.append(a)
  else:
    package_price.append(b*6)
  
  each_price.append(b) # 낱개 가격도 넣어 놓는다

package_price.sort()
each_price.sort()
total = 0

while True:
  if N >= 6: # 6보다 크면.. 패키지 가격(package_price)으로 처리
    total = total + package_price[0]
    N = N - 6
  else: # N이 6보다 작으면.. 남은 N만큼에 대해 "낱개 가격(each_price)*N이랑 6개 그냥 다 사는 것 중 작은 값"으로 계산하고 반복문 탈출
    total = total + min((each_price[0] * N), package_price[0])
    break

print(total) # 답 출력