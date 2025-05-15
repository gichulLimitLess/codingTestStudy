'''
  그룹 단어
  -> ex1) ccazzzzbb: 모두 연속해서 나타나니깐 그룹 단어
  -> ex2) aabbbccb: b가 떨어져 나가니까 그룹 단어 X
'''

# N = int(input())
# group_cnt = 0

# for _ in range(N):
#   word = input() # 입력 받기
#   dict = {}
#   prev = ''
#   cnt = 0

#   for element in word:
#     if dict.get(element) == None: # 처음 발견한 알파벳이라면
#       dict[element] = True
#       prev = element
#       cnt += 1
#     elif prev == element: # 이전 꺼랑 같은 알파벳이라면
#       cnt += 1
#     else: # 이 상황은 그룹이 깨진 상황밖에 연출이 안됨
#       break
  
#   if cnt == len(word): # 그룹 단어로 판명된 경우
#     group_cnt += 1
  
#   # 초기화
#   prev = ''
#   cnt = 0
#   dict = {}

# print(group_cnt)

# 위의 코드에 비해 좀 더 가독성 및 연산 최적화 버전으로 개선 가능
N = int(input())
group_cnt = 0

for _ in range(N):
    word = input()
    seen = set()
    prev = ''
    is_group = True

    for ch in word:
        if ch != prev:
            if ch in seen:
                is_group = False
                break
            seen.add(ch)
        prev = ch

    if is_group:
        group_cnt += 1

print(group_cnt)
