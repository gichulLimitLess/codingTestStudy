'''
  입구엔 대근이, 출구엔 영식이
  차의 대수 N (1 <= N <= 1,000)

  우선, {"차량번호": 들어간 순서} 형태의 dict를 만든다

  "반드시" 추월한 것을 아는 방법은
  --> 간단하다. 
    들어갔을 때 자기 자신의 앞에 있던 모든 차들 중 하나라도 
    나올 때 먼저 나왔으면 추월한거임
  --> 대근이가 적은 입구에서의 차량 순서를 바탕으로 자신의 앞에 있는 차량 정보를 front_CarDictIN에 넣어놓기
  --> 영식이가 적은 출구에서의 차량 순서를 바탕으로 front_CarDictOUT에 넣어 놓고,
'''

import sys

input = sys.stdin.readline

N = int(input().strip())
front_CarDictIN = {} # 빈 딕셔너리 만들기

# input_cars = [] # 터널 입구에서 내 앞쪽에 있는 놈들 추적하기 위함
# for i in range(N): #들어가는 놈들 입력 --> O(N^2) 걸릴 것으로 예상 (일일이 슬라이싱 해야되서..)
#   car_num = input().strip()
#   front_CarDictIN[car_num] = input_cars[:i+1]
#   input_cars.append(car_num)

# illegal_cars = 0
# output_cars = [] # 터널 출구에서 내 앞쪽에 있는 놈들 추적하기 위함
# for i in range(N): #나오는 놈들 입력 후 검사 (여기서, sequential search 해도, O(1000*1000 == 약 100만)임 / OK)
#   car_num = input().strip()
#   for element in front_CarDictIN[car_num]:
#     if element not in output_cars: # 들어갈 때, 지금 나온 차의 앞쪽에 있던 차가, 나올 땐 없다면, 얜 무조건 추월한거임
#       illegal_cars += 1
#       break
#   output_cars.append(car_num)

# print(illegal_cars) # 반드시 추월 했을 것으로 여겨지는 차 대수 출력

'''
  아래는 O(N)이 걸리는 최적화 방법
'''
# 1. 입구 순서 입력받기 + 차량번호 → 순서 인덱스 매핑
N = int(input())
car_in_dict = {}  # 차량 번호 → 입구에서의 순서 인덱스
for i in range(N):
    car_num = input().strip()
    car_in_dict[car_num] = i  # 예: {"A": 0, "B": 1, ...}

# 2. 출구 순서를 입구 기준 인덱스로 변환한 리스트로 저장
car_out_list = []
for _ in range(N):
    car_num = input().strip()
    car_out_list.append(car_in_dict[car_num])  # 출구 기준 차량들을 입구 순서 인덱스로 변환

# 3. 앞에서부터 보며 추월 여부 확인
#    idea: car_out_list에서 자신보다 먼저 나온 차량 중 자신보다 입구 순서가 더 뒤인 경우 → 추월 확정

count = 0
max_index_so_far = -1  # 지금까지 출구에서 등장한 차량들의 입구 기준 최대 인덱스

for idx in car_out_list:
    if idx < max_index_so_far:
        # 현재 차량이 출구에서는 늦게 나왔지만,
        # 입구에선 먼저 들어갔던 차량이 뒤늦게 나왔다는 뜻 → 추월 당한 것
        count += 1
    else:
        max_index_so_far = idx  # 업데이트

print(count)