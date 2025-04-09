'''
  부등호('<' 또는 '>') k개에 대해서.. 부등호 순서를 만족하는 (k+1)자리의 정수 중에서.. 최댓값과 최솟값 찾기 (2 <= k <= 9)
  - 각 부등호의 앞뒤에 들어가는 숫자는 {0,1,2,3,4,5,6,7,8,9} 중에서 선택해야 한다
  - 선택된 숫자는 모두 달라야 한다
  - 모든 입력에 답은 항상 존재하며, 출력 정수는 하나의 문자열이 되도록 해야 한다

  ==> 첫 자리부터 가능한 모든 정수를 집어 넣어보며, 그에 꼬리를 꼬리를 물어.. 그 다음 칸으로 간다 (재귀호출)
  ==> 기저조건: 그렇게 해서, depth가 k+1까지 가서 조합을 완성한 경우엔, res 배열에 그것을 append
  ==> Pruning 조건: 만약, 지금까지 쌓아온 조합에 대해서, 다음 자리에 들어갈 것이 없다면.. 재귀호출 종료해야 함
  ==> 최종적으로 모든 조합을 구해낸 후, res 배열에서 max, min 한 다음, 구하면 될 듯 (출력할 땐, string으로 변환해서!)
    --> Python에선, 맨 앞자리가 0인 문자열로 된 숫자에 대해서도.. int() 하면.. 알아서 짤라준다
'''

k = int(input())
nonEqualSym_list = input().split()

answer = [-1 for _ in range(k + 1)]
res = []
visited = [False] * 10

def find(depth):
    if depth == k + 1:
        res.append(''.join(map(str, answer)))
        return

    for i in range(10):
        if visited[i]:
            continue

        if depth == 0:
            answer[depth] = i
            visited[i] = True
            find(depth + 1)
            visited[i] = False
        else:
            prev = answer[depth - 1]
            symbol = nonEqualSym_list[depth - 1]
            if (symbol == '<' and prev < i) or (symbol == '>' and prev > i):
                answer[depth] = i
                visited[i] = True
                find(depth + 1)
                visited[i] = False

        answer[depth] = -1

find(0)

print(max(res))
print(min(res))
