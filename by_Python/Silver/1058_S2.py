'''
  친구
  어떤 사람 A가 또다른 사람 B의 2-친구가 되기 위해선..
  --> 두 사람이 친구이거나.. A와 친구이고 B와 친구인 C가 존재해야 함
'''

N = int(input())
matrix = [input().strip() for _ in range(N)]

# 1. 친구 관계 저장 (양방향 그래프)
friends = {i: [] for i in range(N)}
for i in range(N):
    for j in range(N):
        if matrix[i][j] == 'Y':
            friends[i].append(j)

# 2. 2-친구 계산
max_count = 0

for i in range(N):
    two_friends = set()  # 중복 제거를 위한 set

    # 직접 친구
    for f in friends[i]:
        two_friends.add(f)
        # 친구의 친구
        for ff in friends[f]:
            if ff != i:  # 자기 자신은 제외
                two_friends.add(ff)

    max_count = max(max_count, len(two_friends))

print(max_count)
