'''
  숫자 1을 걸려면 2초가 필요, 1보다 큰 수를 거는데 걸리는 시간은 한 칸씩 옆으로 갈 때마다 1초씩 더 걸림
  상근이의 할머니는 전화 번호를 각 숫자에 해당하는 문자로 외운다 == 어떤 단어를 걸 때, 각 알파벳에 해당하는 숫자를 걸면 됨
  ex) UNUCIC → 868242
'''
vocab = input()

time = 0
for e in vocab: # 단어 하나씩 왔다갔다 하면서 찾기
  if e == 'A' or e == 'B' or e == 'C':
    time += 3
  elif e == 'D' or e == 'E' or e == 'F':
    time += 4
  elif e == 'G' or e == 'H' or e == 'I':
    time += 5
  elif e == 'J' or e == 'K' or e == 'L':
    time += 6
  elif e == 'M' or e == 'N' or e == 'O':
    time += 7
  elif e == 'P' or e == 'Q' or e == 'R' or e == 'S':
    time += 8
  elif e == 'T' or e == 'U' or e == 'V':
    time += 9
  elif e == 'W' or e == 'X' or e == 'Y' or e == 'Z':
    time += 10

print(time)