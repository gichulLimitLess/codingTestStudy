card_num = ''.join(input().split(' '))

clock_num = int(card_num)
# 문자열의 맨 앞 문자에 맨 뒤를 붙이고, 맨 앞 문자를 제거하는 과정 3번 반복
for _ in range(3):
  card_num = card_num[1:] + card_num[0]
  clock_num = min(int(card_num), clock_num) # 더 작은 친구로 갱신

# 이젠 주어진 카드에 대해 시계수를 구한 상태, 전체 시계수를 구하기
clock_num_cnt = 0
for s in range(1111, clock_num + 1):
  num_str = str(s)
  if '0' in num_str: # 0이 있는 경우는 pass
    continue
  
  for i in range(3): # 문자열의 맨 앞 문자 맨 뒤로 하나씩 옮겨본다
    num_str = num_str[1:] + num_str[0]
    if s > int(num_str): # 지금 숫자보다 작은 수를 만들 수 있다면 -> 그건 시계수 X
      break
    elif i == 2 and s <= int(num_str): # 다 순회해 봤고, 여전히 s가 가장 작다면
      clock_num_cnt += 1

print(clock_num_cnt) # 몇 번째로 작은 시계수인지 구하기

