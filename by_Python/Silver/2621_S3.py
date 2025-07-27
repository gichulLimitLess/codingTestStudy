color_arr = []
num_arr = []

for _ in range(5):
    color, num = input().split()
    color_arr.append(color)
    num_arr.append(int(num))

# 색깔이 같은지 확인
same_color = len(set(color_arr)) == 1

# 숫자 정렬
num_arr.sort()

# 숫자가 연속되는지 확인
is_straight = all(num_arr[i] + 1 == num_arr[i+1] for i in range(4))

# 숫자 개수를 세기 위한 수동 카운팅
counts = []  # (숫자, 개수)
visited = [False] * 5

for i in range(5):
    if visited[i]:
        continue
    cnt = 1
    for j in range(i+1, 5):
        if num_arr[j] == num_arr[i]:
            cnt += 1
            visited[j] = True
    counts.append((num_arr[i], cnt))

# 개수 순, 숫자 순 정렬 (내림차순)
counts.sort(key=lambda x: (-x[1], -x[0]))

# 점수 계산
if same_color and is_straight:
    print(num_arr[4] + 900)  # 1번: 스트레이트 플러시
elif counts[0][1] == 4:
    print(counts[0][0] + 800)  # 2번: 포카드
elif counts[0][1] == 3 and counts[1][1] == 2:
    print(counts[0][0]*10 + counts[1][0] + 700)  # 3번: 풀하우스
elif same_color:
    print(num_arr[4] + 600)  # 4번: 플러시
elif is_straight:
    print(num_arr[4] + 500)  # 5번: 스트레이트
elif counts[0][1] == 3:
    print(counts[0][0] + 400)  # 6번: 트리플
elif counts[0][1] == 2 and counts[1][1] == 2:
    hi = max(counts[0][0], counts[1][0])
    lo = min(counts[0][0], counts[1][0])
    print(hi * 10 + lo + 300)  # 7번: 투페어
elif counts[0][1] == 2:
    print(counts[0][0] + 200)  # 8번: 원페어
else:
    print(num_arr[4] + 100)  # 9번: 그 외
