'''
  팰린드롬인지 아닌지 확인해보자
  -> 앞으로 읽을 때와 거꾸로 읽을 때 똑같은 단어를 의미
'''

vocab = input()

idx = len(vocab) - 1
answer = 1
for e in vocab: # 정방향 탐색
  if e != vocab[idx]: # 팰린드롬 아니면..
    answer = 0
    break
  idx -= 1

print(answer) # 결과 출력