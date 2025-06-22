'''
  삼각형과 세 변
'''

# 0, 0, 0 입력되면 탈출
while True:
  input_val = input()
  if input_val == "0 0 0":
    break

  edge_list = list(map(int, input_val.split(' ')))
  edge_list.sort() # 오름차순 정렬

  if edge_list[0] + edge_list[1] <= edge_list[2]: # 삼각형 조건 만족 X
    print("Invalid")
  elif edge_list[0] == edge_list[1] and edge_list[1] == edge_list[2]:
    print("Equilateral")
  elif edge_list[0] == edge_list[1] or edge_list[1] == edge_list[2] or edge_list[0] == edge_list[2]:
    print("Isosceles")
  else:
    print("Scalene")

