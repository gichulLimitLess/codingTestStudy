vocab = input().upper()  # 대소문자 통일
alphabet_dict = {}

for e in vocab:
  if e not in alphabet_dict:
    alphabet_dict[e] = 1
  else:
    alphabet_dict[e] += 1

max_val = max(alphabet_dict.values())
res = [k for k, v in alphabet_dict.items() if v == max_val]

print(res[0] if len(res) == 1 else '?')
