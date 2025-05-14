'''
  모음의 갯수 세기
'''

while True:
  sentence = input()
  cnt = 0

  if sentence == '#':
    break
  
  for alphabet in sentence: # 문장 안의 알파벳을 확인하며 진행
    if alphabet == 'a' or alphabet == 'e' or alphabet == 'i' or alphabet == 'o' or alphabet == 'u':
      cnt += 1
    elif alphabet == 'A' or alphabet == 'E' or alphabet == 'I' or alphabet == 'O' or alphabet == 'U':
      cnt += 1

  print(cnt) # 결과 출력