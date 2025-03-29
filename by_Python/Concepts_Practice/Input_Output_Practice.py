import sys

line = sys.stdin.readline()
print(f"원본: {line}");
print(f"strip(): {line.strip()}") # 양옆의 '\n' 혹은 공백문자 제거
print(f"rstrip(): {line.rstrip()}") # 오른쪽의 '\n' 혹은 공백문자 제거

num = int(sys.stdin.readline().strip())
print(f"{num}+{num}={num+num}")

# 여러 줄에 걸쳐 정수 입력 받는 예제
N = int(input()) # 첫 줄: 정수 개수
nums = []

#수천 줄 이상의 데이터를 입력 받는 경우, input()보다 sys.stdin.readline()을 쓰는 것이 효율적
for _ in range(N):
  num = int(sys.stdin.readline().strip()) #한 줄씩 읽고 int로 변환
  nums.append(num)

print(nums)