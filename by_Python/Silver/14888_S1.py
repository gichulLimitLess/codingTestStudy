# '''
#   연산자 끼워넣기
#   -> N개의 수와 N-1개의 연산자가 주어졌을 때, 만들 수 있는 식의 결과가 최대인 것과 최소인 것을 구하는 프로그램을 작성하시오.
# '''

# # 입력 받기
# N = int(input()) # 수의 갯수
# num_list = list(map(int, input().split(' ')))
# operator_num = list(map(int, input().split(' ')))
# operator_list = []

# for i in range(operator_num[0]):
#   operator_list.append('+')

# for i in range(operator_num[1]):
#   operator_list.append('-')

# for i in range(operator_num[2]):
#   operator_list.append('*')

# for i in range(operator_num[3]):
#   operator_list.append('/')

# combination = ['a'] * (N-1)
# is_selected = [False] * (N-1)

# max_val = -1000000001 # 최솟값이 -10억이라 이렇게 설정
# min_val = 1000000001 # 최댓값이 10억이라 이렇게 설정

# def calc(): # 만들어진 combination 순서에 대해 계산 수행
#   res = num_list[0]
#   for i in range(N-1): # N-1은 combination 길이
#     if combination[i] == '+': # 더하기
#       res += num_list[i+1] 
#     elif combination[i] == '-': # 빼기
#       res -= num_list[i+1]
#     elif combination[i] == '*': # 곱하기
#       res *= num_list[i+1]
#     elif combination[i] == '/': # 나누기
#       if res < 0: # C++14 표준에 맞춰야 하는 부분 (예외처리)
#         res = -(-res // num_list[i+1])
#       else:
#         res //= num_list[i+1]
  
#   return res

# def make_operator_list(depth): # 연산자 순서를 만드는 배열
#   if depth == N-1: # 기저 조건 도달
#     global max_val, min_val
#     res_val = calc() # 현재 combination을 바탕으로 계산하기
#     max_val = max(max_val, res_val) # 현재 최댓값 구하기
#     min_val = min(min_val, res_val) # 현재 최솟값 구하기
#     return

#   for i in range(N-1): # combination 길이만큼 순회
#     if is_selected[i] == True or combination[depth] == operator_list[i]: # 해당 칸에 넣을 연산자가 이미 앞선 단계에서 선택된 경우
#       continue
    
#     is_selected[i] = True # 현재 보고 있는 곳을 선택 되었다고 표시
#     combination[depth] = operator_list[i] 
#     make_operator_list(depth+1)
#     is_selected[i] = False # 이젠 해당 것에 대해선 무시
  

# make_operator_list(0) # 연산 수행
# print(max_val) # 최댓값 출력
# print(min_val) # 최솟값 출력


N = int(input())
num_list = list(map(int, input().split()))
plus, minus, mul, div = map(int, input().split())

max_val = -1_000_000_001
min_val = 1_000_000_001

def dfs(depth, cur, plus, minus, mul, div):
    global max_val, min_val
    if depth == N:
        max_val = max(max_val, cur)
        min_val = min(min_val, cur)
        return
    if plus:
        dfs(depth+1, cur + num_list[depth], plus-1, minus, mul, div)
    if minus:
        dfs(depth+1, cur - num_list[depth], plus, minus-1, mul, div)
    if mul:
        dfs(depth+1, cur * num_list[depth], plus, minus, mul-1, div)
    if div:
        # C++ 스타일 나눗셈
        if cur < 0:
            dfs(depth+1, -(-cur // num_list[depth]), plus, minus, mul, div-1)
        else:
            dfs(depth+1, cur // num_list[depth], plus, minus, mul, div-1)

dfs(1, num_list[0], plus, minus, mul, div)
print(max_val)
print(min_val)
