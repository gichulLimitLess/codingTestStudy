import java.util.Scanner;
import java.util.Stack;

public class 불쾌한_날_허준호 {

    public static void main(String[] args) {
        //입력 받기
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] cow = new int[n];

        for(int i=0; i<n; i++){
            cow[i] = sc.nextInt();
        }

        //Stack 선언
        Stack<Integer> stack = new Stack<>();

        //우선 첫번째 값을 stack에 넣는다
        stack.push(cow[0]);
        long result = 0; //count가 int의 범위를 넘어갈 수 있으니 유의하자.

        //비교할 대상을 추출해서 pivot에 저장한다
        for(int i=1; i<n; i++) {
            int me = cow[i];
            /*
                stack이 비어있지 않으면서 stack의 최상단(peek)이 pivot보다 작거나 같은 경우 동안에 while문 반복
                즉, 나를 볼 수 있는 소의 수를 센다.
            */
            while(!stack.isEmpty() && stack.peek() <= me) {
                stack.pop();
            }
            //result는 pop 다 하고 난 후에 남은 나를 볼 수 있는 소의 수를 센 값을 누적하면 된다
            result += stack.size();

            //'나'(me)를 이제 stack에 집어 넣는다
            stack.push(me);
        }

        System.out.println(result);
    }
}