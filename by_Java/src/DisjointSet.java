import java.util.Arrays;

/**
 * 서로소 집합(Disjoint Set) [★아래 코드 외워라..★]
 * - 서로소 관계 
 * - 상호 배타 집합들은 서로 중복으로 포함된 원소가 없는 집합들이다. => 두 집합에 교집합이 없는 관계
 * - 집합에 속한 하나의 특정 멤버(대표자 root)를 통해 각 집합들을 구분한다. 
 * 		=> 그 집합의 '짱'을 먼저 뽑고.. '짱'이 같으면 union하지 말고.. 다르면 한다! 뭐 그런 느낌
 * 
 *  방법 
 *    1. makeset(x) : x를 원소로 갖는 최소 단위 집합 만들기  => "x가 대표자(root)로 만들어 놓자" (나 자신을 '짱'이라고 설정)
 *    2. findset(x) : x원소의 root를 찾는 함수 => 특정 집합의 '짱'을 찾는 것
 *    3. union(x, y): x의 집합과 y의 집합을 합친다. ('짱'을 비교해서.. 같으면 합치지 말고, 다르면 합친다)
 *    	=> x의 root를 찾고 y의 root를 찾아 두 집합 중  
 *         하나의 집합의 root를 한 다른 하나의 집합의 원소로 만든다.
 *    		     
 *  - 서로소 집합 응용
 *  	- MST(최소 신장 트리)와 크루스칼 알고리즘에 적용
 * 
 * 시간 복잡도
 * --> makeset() 한 번 (O(1)) / union()을 위해 2번의 find() (-> find의 최악의 시간복잡도 O(N) (편향 트리일 때..))
 * --> 어떻게 줄임? 
 * 	- 1. ★path(경로) 압축★ (=> 얘가 시간복잡도 측면에서 좀 더 빠름! / 얘를 자주 사용하자)
 * 			=> 찾아온 루트를.. 나의 부모로 바꿔버리는 것!
 * 			=> 밑에 길게 주렁주렁 달려 있던 것들이.. 다 root 밑에 달려있게 됨! / 경로를 말 그대로 압축!
 * 			=> 최악의 경우 2N(초기 make 횟수+pathCompression횟수) + 2(루트까지 find하는 횟수)*유니온횟수(E)
 * 				(Path Compression 안 한 것보단 나음)
 * 	- 2. rank(깊이를 의미?)를 붙임 / 근데.. 얘도 편향트리 될 수도 있음 (-> path 압축도 안됨)
 * 			(-> 랭크가 작은 거에.. 큰 거를 붙이면 rank 너무 커짐 / 반대로 랭크가 큰 거에.. 작은 거를 붙이면 rank 별로 안 커짐)
 */
public class DisjointSet {
	static int N;
	static int[] parents;
	
	/*
	 * 모든 원소들에 대한 초기 값을 설정 하는 함수
	 * - 자기 자신을 root로 설정 한다. 
	 */
	public static void make() {
		for(int i = 0; i < N; i++) {
			parents[i] = i;
		}
	}
	
	/*
	 * 인자로 전달 받은 원소(v)의 root를 찾는 기능
	 */
	public static int find(int v) {
		//root가 내 자신으로 설정되어 있는 경우.. 나 자신을 return 해주면 된다 (root를 찾았으니 종료 / 이것이 find() 함수의 종료 조건!)
		if(parents[v] == v) return v;

		//내 부모가 내 자신이 되는 경우면.. 더 이상 올라갈 필요 X, 그때까지 재귀 호출 해봐야 한다
		//내 자신이 root가 아니기 때문에.. 부모의 root를 또 찾으러 가기
		// return find(parents[v]);  ==> 이 친구의 문제점: 편향 트리인 경우 시간 복잡도는 O(N)이 되버림 ==> path compression이 필요!

		//path compression: 찾아온 root를 나의 부모로 변경하기 한 후, return!
		/*
		 * find() 함수의 결과물은.. v의 root를 찾아오게 됨. 그것을 v의 부모로 둔다
		 * 	--> root 바로 밑에 v를 두게 되는 꼴, path compression이 일어나게 됨!
		 */
		// parents[v] = find(parents[v]);
		// return parents[v];
		// 위의 두 줄을 한 줄 코드로 바꾸면 아래와 같다
		return parents[v] = find(parents[v]);
	}
	
	
	/*
	 * 인자로 받은 두 원소의 집합이 다른 경우 합치는 기능
	 */
	public static boolean union(int a, int b) {
		//두 원소의 root부터 찾아야 한다.
		int aRoot = find(a);	
		int bRoot = find(b);

		//두 원소의 root가 서로 다를 때에만 union할 것이다.
		//root가 동일한데 union을 하면 cycle이 발생! --> false 반환해야 함
		if(aRoot == bRoot) return false;

		//bRoot의 부모에 aRoot 넣어도 상관 X (반대여도 상관 없음)
		parents[aRoot] = bRoot;
		return true;
	}
	public static void main(String[] args) {
		N= 6;
		parents = new int[N];
		make();

		//편향 트리 만들어보기?
		union(0, 1);
		System.out.println(Arrays.toString(parents));
		union(1, 2);
		System.out.println(Arrays.toString(parents));
		union(2, 3);
		System.out.println(Arrays.toString(parents));
		union(3, 4);
		System.out.println(union(4, 5));
		System.out.println(Arrays.toString(parents));
		find(3);
		System.out.println(Arrays.toString(parents));
		// System.out.println(find(1));
		// System.out.println(Arrays.toString(parents));
		// System.out.println(find(4));
		// System.out.println(Arrays.toString(parents));
	}
}
