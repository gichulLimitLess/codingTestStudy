'''
  니 평점은?
  --> 전공평점은 전공과목별 (학점 * 과목평점)의 합을 (학점)의 총합으로 나눈 값
'''

total_hakjum = 0
total = 0

def returnGradeToFloat(grade):
  if grade == 'A+':
    return 4.5
  elif grade == 'A0':
    return 4.0
  elif grade == 'B+':
    return 3.5
  elif grade == 'B0':
    return 3.0
  elif grade == 'C+':
    return 2.5
  elif grade == 'C0':
    return 2.0
  elif grade == 'D+':
    return 1.5
  elif grade == 'D0':
    return 1.0
  elif grade == 'F':
    return 0.0

for _ in range(20): # 20줄에 걸쳐서 수강한 전공과목의 과목명, 학점, 등급이 공백으로 구분되어 주어짐
  [name, hakjum, grade] = input().split(' ')
  if grade == 'P': # 등급이 P인 과목은 계산에서 제외해야 한다
    continue

  total_hakjum += float(hakjum)
  total += (float(hakjum) * returnGradeToFloat(grade))

print(total / total_hakjum) # 결과 출력