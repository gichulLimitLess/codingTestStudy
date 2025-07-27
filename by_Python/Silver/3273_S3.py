'''
  두 수의 합
'''

n = int(input())
arr = list(map(int, input().split(' ')))
x = int(input())

arr.sort() # 오름 차순 정렬

cnt = 0 # 쌍의 갯수를 저장할 변수
start = 0
end = len(arr) - 1

while start < end: # 시작점이 끝점보다 작은 경우에만 진행
  if arr[start] + arr[end] < x:
    start += 1
  elif arr[start] + arr[end] > x:
    end -= 1
  else:
    cnt += 1
    end -= 1 # 시작점을 +1 해도 상관 없음

print(cnt) # 정답 출력