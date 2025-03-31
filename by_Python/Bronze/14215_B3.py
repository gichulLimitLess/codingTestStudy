'''
  영선이는 길이가 a, b, c인 세 막대를 가지고 있음, 각 막대의 길이를 마음대로 줄일 수 있음
  (만들려는 삼각형 조건)
  -> 각 막대의 길이는 양의 정수
  -> 세 막대를 이용해서 넓이가 양수인 삼각형을 만들 수 있어야 함
  -> 삼각형의 둘레를 최대로 해야 함

  => 삼각형을 만드는 조건: (가장 긴 변의 길이) < (짧은 변) + (또다른 짧은 변)
'''

num_list = list(map(int, input().split()))
num_list.sort() #오름차순 정렬

if num_list[2] >= num_list[0] + num_list[1]: # 가장 긴 변의 길이를 줄여야 하는 경우
  min_reduce_val = num_list[2] - (num_list[0] + num_list[1]) + 1 # 긴 변을 최대한 적게 줄여야 한다
  num_list[2] = num_list[2] - min_reduce_val

print(sum(num_list))