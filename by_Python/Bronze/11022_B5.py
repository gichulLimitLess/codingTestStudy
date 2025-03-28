TC = int(input())
nums = []

for i in range (0, TC):
  num = list(map(int, input().split()))
  nums.append(num)
  
#f 문법 써가지고 굉장히 코드를 효율적으로 만들 수 있다!
for i in range (0, TC):
  print(f"Case #{i+1}: {nums[i][0]} + {nums[i][1]} = {nums[i][0]+nums[i][1]}")