/*
  [시간복잡도 계산]
  make(): O(N)
  find(): Path 압축 안 일어나면 더 좋아.. 그치만 한다고 치면, O(N+a(a는 거의 무시해도 되는 수준))
  union(): 루트까지 find()하는 횟수 (-> path 압축이 되었으면 2) * E(union 횟수)
  => 최악의 경우 2N(초기 make 횟수+pathCompression횟수) + 2(루트까지 find하는 횟수)*유니온횟수(E)
*/
class DisjointSet {
  //생성자
  constructor(size) {
    this.parents = new Array(size);
    this.make();
  }

  //모든 원소를 자신을 부모로 설정하며 초기화
  make() {
    for(let i = 0; i < this.parents.length; i++) {
      this.parents[i] = i;
    }
  }

  //원소 v의 대표자(root)를 찾는 함수 (Path Compression 적용)
  find(v) {
    //root가 내 자신으로 설정되어 있는 경우.. 나 자신을 return 해주면 된다 (root를 찾았으니 종료 / 이것이 find() 함수의 종료 조건!)
    if(this.parents[v] == v) return v;

    //root 바로 아래에다가 모든 노드를 둬버리는 것이다.. Path Compression!
    return this.parents[v] = this.find(this.parents[v]);
  }

  //두 원소 x와 y가 속한 집합을 합치는 함수
  union(a, b) {
    const aRoot = this.find(a);
    const bRoot = this.find(b);

    /*
      두 원소의 root가 서로 다를 때에만 union할 것임
      root가 동일한데 union을 하면 cycle 발생 --> false 반환해야 함
    */
    if(aRoot === bRoot) return false;

    //bRoot의 부모에 aRoot 넣어도 상관 X (반대여도 관계 없다는 얘기)
    this.parents[aRoot] = bRoot;
    return true;
  }
}

//사용 예시
const ds = new DisjointSet(6);

console.log(ds.union(1, 2));  // true  (1과 2가 다른 집합이므로 합침)
console.log(ds.parents);      // [0, 2, 2, 3, 4, 5]
// → 1의 부모가 2가 됨

console.log(ds.union(3, 4));  // true  (3과 4가 다른 집합이므로 합침)
console.log(ds.parents);      // [0, 2, 2, 4, 4, 5]
// → 3의 부모가 4가 됨

console.log(ds.union(5, 3));  // true  (5와 3이 다른 집합이므로 합침)
console.log(ds.parents);      // [0, 2, 2, 4, 4, 4]
// → 5의 부모가 4가 됨

console.log(ds.union(1, 5));  // true  (1과 5가 다른 집합이므로 합침)
console.log(ds.parents);      // [0, 2, 4, 4, 4, 4]
// → 1의 부모가 2였지만, 2의 부모를 찾으면 결국 4이므로, 1의 부모도 4로 갱신됨

console.log(ds.find(1));      // 4  (1의 대표자는 2였지만, 2의 대표자는 4 → 최종적으로 4)
console.log(ds.parents);      // [0, 4, 4, 4, 4, 4]
// → 경로 압축이 적용되어 모든 노드가 최상위 대표자(4)를 직접 가리킴

console.log(ds.find(4));      // 4  (4는 이미 자기 자신이므로 그대로 반환)
console.log(ds.parents);      // [0, 4, 4, 4, 4, 4]
// → 이미 모든 원소가 루트(4)로 갱신된 상태이므로 변화 없음