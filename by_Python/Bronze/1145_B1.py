'''
  적어도 대부분의 배수
'''
nums = list(map(int, input().split()))

x = 1
while True:
    count = 0
    for num in nums:
        if x % num == 0:
            count += 1
    if count >= 3:
        print(x)
        break
    x += 1
