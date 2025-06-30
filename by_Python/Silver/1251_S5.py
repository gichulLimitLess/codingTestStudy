'''
  단어 나누기
'''

vocab = input()
vocab_len = len(vocab)

results = []

# 모든 가능한 (i, j) 분할 조합 순회 (최대 1176회 탐색 (len=49) → 브루트포스 가능)
for i in range(1, vocab_len - 1):
    for j in range(i + 1, vocab_len):
        seg1 = vocab[0:i]
        seg2 = vocab[i:j]
        seg3 = vocab[j:]

        res = seg1[::-1] + seg2[::-1] + seg3[::-1]
        results.append(res)

# 사전순 정렬 후 가장 앞에 있는 단어 출력
results.sort()
print(results[0])


