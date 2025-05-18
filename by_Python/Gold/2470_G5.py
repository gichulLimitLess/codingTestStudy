'''
  두 용액
  -> 모든 조합에 대해 계산 때리려 하면.. O(5억)
  -> 쌉 불가니까.. 내가 생각해 낸 것은.. 투 포인터!
'''

N = int(input())
array = list(map(int, input().split()))
answer = [0, 0]

# 정렬 먼저! (오름차순으로다가..)
array.sort()

if array[N-1] <= 0: # 모두 알칼리성 또는 0
  answer[0] = str(array[N-2])
  answer[1] = str(array[N-1])
elif array[0] >= 0: # 모두 산성 또는 0
  answer[0] = str(array[0])
  answer[1] = str(array[1])
else: # 산성과 알칼리성 모두 섞여있는 경우
  start = 0
  end = N-1
  min_val = 2100000000

  while start < end: # start가 end보다 작은 모든 경우 탐색해야 함
    if array[start] + array[end] == 0: # 이건 바로 정답
      answer[0] = str(array[start])
      answer[1] = str(array[end])
      break

    if array[start] + array[end] > 0: # 둘이 더해서 양수
      if min_val > abs(array[start]+array[end]): # 0에 더 가까운 친구 발견
        min_val = abs(array[start]+array[end]) # 최솟값 갱신
        answer[0] = str(array[start])
        answer[1] = str(array[end])
      end -= 1
    elif array[start] + array[end] < 0: # 둘이 더해서 음수
      if min_val > abs(array[start]+array[end]): # 0에 더 가까운 친구 발견
        min_val = abs(array[start]+array[end]) # 최솟값 갱신
        answer[0] = str(array[start])
        answer[1] = str(array[end])
      start += 1

print(' '.join(answer)) # 결과 출력