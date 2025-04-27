'''
  바구니 N개 / 1 ~ N번까지 번호가 매겨져 있음
  앞으로 M번 공을 바꾸려 함 -> 공을 바꿀 바구니 2개 선택, 두 바구니에 들어있는 공 서로 교환
  어떻게 바꿀지가 주어졌을 때, M번 공을 바꾼 후 각 바구니에 어떤 공이 들어있는지 구해라.
'''

N, M = map(int, input().split(' '))
basket_list = [i for i in range(N+1)] # 0번 제외하고 사용할게?

for _ in range(M): # 공을 M번 바꿀거임
  i, j = map(int, input().split(' '))
  basket_list[j], basket_list[i] = basket_list[i], basket_list[j]

basket_list.remove(0) # 0(맨 앞에 거)은 필요 없으니 제거
print(' '.join(map(str, basket_list)))