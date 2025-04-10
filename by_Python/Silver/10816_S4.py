# '''
#   [입력]
#   상근이가 가지고 있는 숫자 카드 갯수 N (1<=N<=500,000)
#   숫자 카드에 적혀 있는 정수 x N개 (-10,000,000 <= x <= 10,000,000)
#   M (1 <= N <= 500,000)
#   확인하려는 정수 y M개 (-10,000,000 <= y <= 10,000,000)

#   [출력]
#   입력으로 주어진 M개의 수에 대해서, 각 수가 적힌 숫자 카드를 상근이가 몇 개 가지고 있는지를 공백으로 구분해 출력
# '''
# from collections import Counter
# import sys

# input = sys.stdin.readline

# N = int(input())
# num_list = list(map(int, input().split()))

# M = int(input())
# check_list = list(map(int, input().split()))

# count = Counter(num_list)

# # check_list 순서 그대로 하나씩 조회
# result = [str(count.get(x, 0)) for x in check_list]
# print(' '.join(result))

'''
  [입력]
  상근이가 가지고 있는 숫자 카드 갯수 N (1<=N<=500,000)
  숫자 카드에 적혀 있는 정수 x N개 (-10,000,000 <= x <= 10,000,000)
  M (1 <= N <= 500,000)
  확인하려는 정수 y M개 (-10,000,000 <= y <= 10,000,000)

  [출력]
  입력으로 주어진 M개의 수에 대해서, 각 수가 적힌 숫자 카드를 상근이가 몇 개 가지고 있는지를 공백으로 구분해 출력
'''
import sys

input = sys.stdin.readline

N = int(input().strip())
num_list = list(map(int, (input().strip().split(' '))))
M = int(input().strip())
check_list = list(map(int, (input().strip().split(' '))))
res = []

#set과 dict는 해시 테이블 기반이기 때문에 평균적으로 O(1)의 시간 복잡도로 in 연산을 수행
#유의사항: check_list에 있는 값은 중복될 수 있다는 것을 알아야 함 --> 추후 배열 순회로 해야 함
check_dict = {key: 0 for key in check_list}

for element in num_list: # num_list 보면서 검사
  if element in check_dict: # O(1)의 시간으로 연산 수행 가능
    # element에 대해서 key-value 쌍 생성 (이미 있다면, 기존 값 들고와서 넣을 거임)
    check_dict[element] = check_dict.get(element, 0) + 1

for element in check_list: #check_list엔 중복된 애들이 있을수도 있어서, 각 자리에 맞게 값 저장해야 함
  res.append(str(check_dict[element])) #check_dict에 있는 value 값을 element 값을 key로 삼아 갖고 온다

# res에 있는 값 모두 출력
print(' '.join(res))