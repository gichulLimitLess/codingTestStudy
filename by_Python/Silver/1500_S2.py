def max_product(S, K):
    """
    합이 S인 K개의 양의 정수 조합에서 곱을 최대화하는 함수.

    알고리즘 설명:
    - 산술평균-기하평균 부등식에 의해 값들이 균등하게 분배될수록 곱이 최대가 됩니다.
    - 따라서, S를 K로 최대한 균등하게 분배하여 문제를 해결합니다.
    
    관련 수학적 이론:
    - 산술평균 ≥ 기하평균:
      (x₁ + x₂ + ... + xₖ) / k ≥ (x₁ * x₂ * ... * xₖ)^(1/k)
      여기서 등호는 x₁ = x₂ = ... = xₖ일 때만 성립합니다.
      즉, 값들이 같거나 최대한 비슷할 때 곱이 최대가 됩니다.
    """

    # 1. S를 K로 나눈 몫과 나머지 계산
    base = S // K  # 각 숫자가 될 기본 값
    remainder = S % K  # 추가로 분배할 숫자 개수

    # 2. K개의 정수를 생성
    # remainder개의 값에 1씩 추가하여 더 균등하게 만듦
    numbers = [base] * K
    for i in range(remainder):
        numbers[i] += 1

    # 3. 결과 곱 계산
    product = 1
    for num in numbers:
        product *= num

    return product

#입력 받은 후 결과 출력
S, K = map(int, input().split(' '))
print(max_product(S, K))  # 출력: 36
