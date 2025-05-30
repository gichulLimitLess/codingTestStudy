'''
  대회에 나갈 때 2명의 여학생, 1명의 남학생이 팀을 결성해 나가는 것이 원칙

  N명의 여학생, M명의 남학생 -> 대회에 참여하려는 학생들 중 K명은 반드시 인턴쉽 프로그램에 참여해야 함
  인턴에 참여할 경우, 대회에 참여 X

  팀의 갯수를 최대로 해야 함
  --> 여학생의 수 N, 남학생의 수 M, 인턴쉽에 참여해야 하는 인원 K / 만들 수 있는 최대 팀 수?

  첫째 줄에 N, M, K (0 <= M <= 100, 0 <= N <= 100, 0 <= K <= M+N)

'''

N, M, K = map(int, input().split())

# 최대 팀 수는 여학생 수 기준, 남학생 수 기준, 남은 인원 기준으로 결정됨
max_team = min(N // 2, M)

# 여학생과 남학생을 제외하고 K명을 인턴으로 보내야 함
if N + M - K < max_team * 3:
    max_team = (N + M - K) // 3

print(max_team)