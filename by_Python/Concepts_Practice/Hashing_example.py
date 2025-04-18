'''
    파이썬에선, Hashing을 이용해서 문제를 풀려 할 때, 주로 "Dictionary" 활용
    (해당 예시는.. 프로그래머스의 '의상' 문제를 풀이한 예제입니다.)
'''
def solution(clothes):
    clothes_dict = {}
    for i in range(len(clothes)):
        if clothes[i][1] not in clothes_dict:
            clothes_dict[clothes[i][1]] = [clothes[i][0]] # 의상 종류: 의상 이름 -> 이런 식으로 딕셔너리에 저장
        else:
            clothes_dict.get(clothes[i][1]).append(clothes[i][0]) # 리스트에 관해 append()는 따로 return 값 X
            
    #(각 key에 대한 value에 들어있는 배열 길이 + 1)들을 모두 곱해주고, 거기서 전부 안 입은 경우 한 번만 빼주면 된다
    res = 1
    for key in clothes_dict:
        res *= (len(clothes_dict.get(key))+1)
    
    return res - 1

print(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])) #결과: 3