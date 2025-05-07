'''
  9*9 격자판에 쓰인 81개 자연수 또는 0
  이 중 최댓값 찾고, 그 최댓값이 몇 행/몇 열에 위치한 수인지 구하자
'''
maxVal_Candidate = []

for i in range(9):
  row = list(map(int, input().split(' ')))
  maxVal_Candidate.append([max(row), i+1, row.index(max(row))+1]) # 최댓값 후보, 그리고 그것의 행/열 번호 저장

maxVal = max(maxVal_Candidate)
print(maxVal[0]) # 최댓값 출력
print(str(maxVal[1]) + ' ' + str(maxVal[2])) # 행/열 출력