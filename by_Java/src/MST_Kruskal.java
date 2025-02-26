import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashSet;
import java.util.StringTokenizer;

/**
 * 신장트리 
 *  - n개의 정점으로 이루어진 무향 그래프에서 n개의 정점과 n-1개의 간선으로 이루어진 트리 
 *  -> 완탐 관점 eCn-1		  20C10	: 18만    30C15 : 1억 5천만
 *     n=100일때 최대 간선 n(n-1)/2    5000C99    5000!/4901!99!  ---> 연산.. 실질적으로 불가능
 *  - 그리디를 응용한 알고리즘 (완전 탐색 X)
 */

/*
 * 크루스칼 알고리즘
 * 
 * - 간선(Edge)의 비용을 이용해서 오름 차순으로 정렬한다. 
 * - 비용이 적은 간선 부터 V-1개의 간선을 선택해 신장트리를 만든다. 
 *   간선을 선택할 때 cycle이 생기지 않는지 check해서 
 *   cycle이 생기지 않는 간선인 경우 선택하고 해당 비용을 누적한다. 
 * => Disjoint가 다 하는 것임..
 * 
 * 시간 복잡도 (간선(Edge)이 적으면.. Kruskal / 간선이 많으면.. Prim)
 * 1. makeSet()	=> 시간 복잡도   O(v)
 * 2. Edge정렬 	=> 시간 복잡도   O(ElogE)
 * 3. union(-> Path 압축 했다고 가정)	=> 시간 복잡도  O(V+ 2*union(E,E)) => O(E)  
 * 
 * O(v+ElogE+E)  => O(ElogE)
 * 
정점수 간선수
시작정점 끝정점 가중치
5 10
0 1 5
0 2 10
0 3 8
0 4 7
1 2 5
1 3 3
1 4 6
2 3 1
2 4 3
3 4 1

==>10
----------------------------------

7 11
0 1 3
0 2 17
0 3 6
1 3 5
1 6 12
2 4 10
2 5 8
3 4 9
4 5 4
4 6 2
5 6 14

==>31

 */
//Kruskal 알고리즘 사용하기 위한 class MST_Kruskal
// --> 아래 알고리즘 살펴 보면.. DisjointSet이 다 해주는거임..!
public class MST_Kruskal{
	//간선으로 정렬해야 하므로 간선 클래스를 작성한다. (얘는 아래처럼 따로 좀 만들어줘야 한다...)
	static class Edge implements Comparable<Edge>{
		int from;
		int to;
		int weight;			//비용
		public Edge(int start, int end, int weight) {
			super();
			this.from = start;
			this.to = end;
			this.weight = weight;
		}
		public int compareTo(Edge o) {
			//오름 차순으로 정렬
			return Integer.compare(this.weight, o.weight);
		}
	}
	
	static Edge[] edgeList;
	static int[] parents;
	static int V,E;
	
	//disjoint set 만들기(make())
	public static void make() {
		for(int i = 0; i < V; i++) {
			parents[i] = i;
		}
	}

	//노드의 root 찾기(find())
	public static int find(int a){
		if(parents[a] == a) return a; //자기 자신이면 그냥 자기 자신 뱉어버리기
		return parents[a] = find(parents[a]); //아니라면 재귀 호출(경로 압축을 위해)
	}
	
	//두 집합 합쳐 버리기(union())
	public static boolean union(int a,int b){
		int aRoot = find(a);
		int bRoot = find(b);

		//루트가 같다면, 같은 집합이니까 false
		if(aRoot == bRoot) return false;

		//반대로 바꿔도 관계 없음
		parents[aRoot] = bRoot;
		return true;
	}	

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine().trim());
		V = Integer.parseInt(st.nextToken());
		E = Integer.parseInt(st.nextToken());
		parents = new int[V];
		edgeList = new Edge[E];
		
		//간선(Edge) 정보 입력
		for(int i=0; i<E; ++i){
			st = new StringTokenizer(br.readLine(), " ");
			int from = Integer.parseInt(st.nextToken());
			int to = Integer.parseInt(st.nextToken());
			int weight = Integer.parseInt(st.nextToken());

			edgeList[i] = new Edge(from, to, weight);
		}
		
//  makeset
		make();
//  간선비용이 작은 순서대로 정렬
		Arrays.sort(edgeList);
		
		int result = 0;				//MST 비용
		int count=0;				// 연결 간선수
		
//      모든 간선을 반복하면서
		for(Edge edge: edgeList) {
//	    	싸이클이 발생하지 않았으면
//       --> true를 줬다면.. cycle이 발생한 게 아니니까
			if(union(edge.from, edge.to)) {
				//비용 누적
				result += edge.weight;
				//연결 수 증가 및 V-1개인지 확인 (V-1개이면 연결 다 끝난 거임)
				if(++count == V-1) {
					break;
				}
			}
		}
		
//      결과 출력
		System.out.println(result);
	}
}// end class
