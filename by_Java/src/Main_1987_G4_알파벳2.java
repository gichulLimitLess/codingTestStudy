import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;
/**
 * 
 *   
 *   준비 단계
 *   1.  1,1 ~ R, C까지 좌표지만 좌표로 딱히 다른 계산을 하지 않고 최대 이동 거리만 나오므로 
 *   0,0 ~ R-1, C-1 좌표를 사용한다. 
 *   2. 방문 체크 할 [26]개의 일차원 배열 대신 bitmask 이용
 *   ==> 이미 이동한 알파벳을 또 이동 할 수 없으므로 알파벳에 대한 방문 처리만 하면 된다. 
 *   3. 방문한 알파벳을 체크하기 위해 map은 char배열로 해서 -'A' 한 위치에서 방문 체크를 해도 되지만 
 *      편히 쓰기 위해 int[][]map을 선언한다.   
 *   4. 방문시 이미 방문한 알파벳이라면 뒤로 돌아가서 다른 길을 탐색해야 하므로 DFS로 탐색한다.
 *    
 *   5. BT(백트래킹)를 위해 visited 배열을 추가 ==> bitmask를 이용한다. 
 *      bitmask에 시작 좌표에 있는 알파벳부터 이동거리의 알파벳들을 추가해서 기록한다. 
 *     
 *      IER
 *      ERF   (1,2) 좌표의 F는   IER에서 오는 경로가 3군데 이지만 앞으로 가야 하는 경우의 수는 모두 같다. 
 *                             그러므로 이미 가본 알파벳은 또 가지 않게 BT
 *     
 *     
 *      
 *   1. 입력 받기 
 *      맵 데이타 입력 받을 때 int[][] 이므로 -'A' 해준다.
 *   2. 0, 0좌표에서 이동 거리를 1로 해서 dfs로 탐색한다. 현재 알파벳도 count한다. 
 *   	2.1. 현재 위치의 알파벳을 방문 처리하고 max값을 갱신한다. 
 *   	2.2. max값이 26이면 더 탐색 할 필요가 없다.  (BT)
 *   	2.3. 사방을 탐색 시도  
 *        2.2.1 경계내에 있고 이동했던 알파벳이 아니고 
 *        		다음 좌표가 이전 다른 경로로 이동했던 좌표라면  현재 이동 알파벳에+다음 좌표 알파벳과 같으면
 *              계속 가도 이전 결과와 같기 때문에 다른 알파벳이라면   
 *              다음 좌표로 이동한다. 
 *      2.4. 다른 경로로 이동해 보기 위해 현재 알파벳에 대한 방문을 false로 한다. 
 *   
 *   3. max 값을 출력한다. 
 *    
 *  164ms
 */
public class Main_1987_G4_알파벳2 {
	final static int[] dr = {-1, 1, 0, 0};
    final static int[] dc = {0, 0, -1, 1};

    static int R, C, max;
    static int[][] map;
    static int[][] visited; // [r][c]에 여태까지 방문한 알파벳을 bitmask로 기록 (Memoization 적극 활용하자)

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());
        R = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());
        max = 0;

        map = new int[R][C];
        visited = new int[R][C];

        for (int i = 0; i < R; i++) {
            String str = br.readLine();

            for (int j = 0; j < C; j++) {
                map[i][j] = str.charAt(j) - 'A';
            }
        }
        dfs(0, 0, 1 << map[0][0], 1);
        System.out.println(max);
    }

    private static void dfs(int r, int c, int bit, int cnt) {
    	max = Math.max(max, cnt);
        //이정도는 얕은 BT(Back-tracking)이라고 볼 수 있음..... (시간 줄이려면 더 해야 함)
        if (max == 26)
            return;
        //시작 좌표에서 현재 좌표까지 방문한 알파벳을 메모한다.
        visited[r][c] = bit;

        for (int i = 0; i < 4; i++){
            int nr = r + dr[i];
            int nc = c + dc[i];

            //경계 밖이면
            if(nr<0 || nr>=R || nc<0|| nc>=C) continue;

            //방문 체크(현재 좌표의 알파벳이 있는지 체크)
            if ((bit & 1 << map[nr][nc]) == 0 &&
                    //안 가본 알파벳만 가볼거야! 라는 의미를 가진 코드 (count가 중요한 게 아니라.. 알파벳을 방문했는지의 여부만이 중요하기 때문!)
                    //map[nr][nc] 위치의 알파벳을 bit에 추가한 후, 이전 기록과 같은지 체크
                    (bit | 1 << map[nr][nc]) != visited[nr][nc]) { //같으면 안가고 ==> 탐색 해봤자 같은 경우의 수이므로..
                //이전 기록고 ㅏ같지 않은 알파벳 조합이라면, dfs로 탐색 해본다.
                dfs(nr, nc, bit | 1 << map[nr][nc], cnt + 1);
            }
        }
    }
}
