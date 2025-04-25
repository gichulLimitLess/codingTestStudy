class DisjointSet:
    # 생성자: 모든 원소를 자기 자신을 부모로 초기화
    def __init__(self, size):
        self.parents = [i for i in range(size)]  # make()

    # 원소 v의 대표자(root)를 찾는 함수 (Path Compression 적용)
    def find(self, v):
        if self.parents[v] == v:
            return v
        # 경로 압축: 루트 노드로 바로 연결
        self.parents[v] = self.find(self.parents[v])
        return self.parents[v]

    # 두 원소 x, y가 속한 집합을 합치는 함수
    def union(self, a, b):
        root_a = self.find(a)
        root_b = self.find(b)

        # 이미 같은 집합이면 false 반환 (Cycle 방지)
        if root_a == root_b:
            return False

        # 하나의 루트를 다른 루트에 연결
        self.parents[root_a] = root_b
        return True


# 사용 예시
ds = DisjointSet(6)

print(ds.union(1, 2))  # True
print(ds.parents)      # [0, 2, 2, 3, 4, 5]

print(ds.union(3, 4))  # True
print(ds.parents)      # [0, 2, 2, 4, 4, 5]

print(ds.union(5, 3))  # True
print(ds.parents)      # [0, 2, 2, 4, 4, 4]

print(ds.union(1, 5))  # True
print(ds.parents)      # [0, 2, 4, 4, 4, 4]

print(ds.find(1))      # 4
print(ds.parents)      # [0, 4, 4, 4, 4, 4]

print(ds.find(4))      # 4
print(ds.parents)      # [0, 4, 4, 4, 4, 4]