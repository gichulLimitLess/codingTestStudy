'''
  알파벳 소문자로만 이루어진 단어 S
  단어의 길이는 100을 넘지 않으며, 알파벳 소문자로만 이루어져 있음
'''

S = input()
alphabet_cnt = [-1 for _ in range(26)]


for idx, element in enumerate(S): #처음 등장하는 위치를 저장해야 함
  if alphabet_cnt[ord(element) - ord('a')] == -1: # 처음 등장한 위치만 기록해야 함
    alphabet_cnt[ord(element) - ord('a')] = idx

print(' '.join(map(str, alphabet_cnt)))