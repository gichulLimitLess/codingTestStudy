'''
  [통계학]
  N을 홀수(1 <= N <= 500,000)라고 가정하고, 아래의 대푯값들을 구해라
  1. 산술평균: N개의 수들의 합을 N으로 나눈 값 (소수점 첫째자리에서 반올림한 값 출력)
  2. 중앙값: N개의 수들을 증가하는 순서로 나열했을 경우, 그 중앙에 위치하는 값
  3. 최빈값: N개의 수들 중 가장 많이 나타나는 값 (여러 개 있을 경우, 최빈값 중 두 번째로 작은 값 출력)
  4. 범위: N개의 수들 중 최댓값과 최솟값의 차이
'''
import sys

input = sys.stdin.readline

N = int(input().strip()) # N은 홀수로만 주어짐(중앙값 때문에!)
array = [] # 입력받은 N개의 정수들이 저장될 곳

for _ in range(N): # N개의 정수 입력받기
  a = int(input().strip())
  array.append(a)

# 1단계: 산술평균 구하기
answer1 = round(sum(array) / N)

# 중앙값 구하기 전에 배열 오름차순 정렬
array.sort()

# 2단계: 중앙값 구하기
answer2 = array[(len(array)-1)//2]

# 3단계: 최빈값 구하기 (이 문제에서 가장 어려운 부분)
count = {}
for element in array: # array 돌면서, element를 key 삼아서 계산을 진행 => O(50만)
  if element in count:
    count[element] += 1
  else:
    count[element] = 1

maxVal = max(count.values()) # array 돌면서, element를 key 삼아서 max 값 찾기 => O(50만 * 2)
answer3 = 0
cnt = 0

for key, value in count.items(): # count 돌면서 최빈값 찾기 => O(50만)
  if value == maxVal: # 최빈값에 해당하는 친구를 찾았다면
    answer3 = key
    if cnt == 1: # 최빈값 중 2번째로 작은 값을 발견했다면
      break
    else: # 최초 발견이라면
      cnt += 1

# 4단계: 범위 구하기
answer4 = array[len(array)-1] - array[0]

# 정답 출력
answer_list = [answer1, answer2, answer3, answer4]
for i in range(4):
  print(answer_list[i])