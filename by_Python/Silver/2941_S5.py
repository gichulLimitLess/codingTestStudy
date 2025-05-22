word = input()
croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]

for pattern in croatian:
    word = word.replace(pattern, "*")  # 크로아티아 알파벳을 하나의 문자로 치환

print(len(word))  # 치환된 문자열의 길이가 곧 문자 수
