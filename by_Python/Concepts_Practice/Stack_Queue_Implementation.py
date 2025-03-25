'''
  스택 만들기
  -> Python에서 스택은 리스트 자체만으로 구현 가능
'''
stack = []
stack.append(1)
stack.append(2)
stack.append(3)
print(stack.pop()) #3 나올 것임

'''
  큐 만들기
  -> collections 안의 deque를 사용하면 됨 (Deque는 double-ended queue, 데이터를 양방향에서 추가하고 제거할 수 있는 자료구조)
  -> 직접 구현 해볼수도 있을 듯?
'''

#Deque 사용
from collections import deque
queue = deque()
queue.append(1)
queue.append(2)
queue.append(3)
print(queue.popleft()) #deque에서 왼쪽 것을 제거, 1 나올 것임

#직접 구현 (Python 리스트는 JavaScript에서의 배열처럼 GC로 앞을 알아서 정리해 주지 않음. 메모리 낭비가 심해질 가능성이 있으므로, 그냥 Deque 쓰자)