# 간선 정보를 저장하는 클래스
class Edge:
    def __init__(self, from_node, to_node, weight):
        self.from_node = from_node
        self.to_node = to_node
        self.weight = weight

# 서로소 집합 클래스
class DisjointSet:
    def __init__(self, size):
        self.parents = [i for i in range(size)]  # make()

    def find(self, v):
        if self.parents[v] == v:
            return v
        self.parents[v] = self.find(self.parents[v])  # Path Compression
        return self.parents[v]

    def union(self, a, b):
        root_a = self.find(a)
        root_b = self.find(b)
        if root_a == root_b:
            return False  # 같은 집합 → 사이클 발생
        self.parents[root_a] = root_b
        return True

# Kruskal 알고리즘 함수
def kruskal(n, edge_list):
    """
    :param n: 정점의 개수
    :param edge_list: Edge 인스턴스의 리스트
    :return: 최소 신장 트리의 총 비용
    """

    # 1. 간선들을 가중치 기준으로 정렬
    edges = sorted(edge_list, key=lambda e: e.weight)

    # 2. Disjoint Set 초기화
    ds = DisjointSet(n)

    total_weight = 0  # 최소 비용 누적
    mst_edges = 0     # 선택된 간선 개수

    for edge in edges:
        if ds.union(edge.from_node, edge.to_node):
            total_weight += edge.weight
            mst_edges += 1
            if mst_edges == n - 1:  # MST는 간선 n-1개일 때 종료 가능
                break

    return total_weight