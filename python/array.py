# # n=int(input())
# # sum=0
# # array=list(map(int,input().split()))
# # for i in range(len(array)):
# #   sum+=array[i]
# # print(sum)

# # n=int(input())
# # fact=1
# # for i in range(1,n+1):
# #     fact*=i
# # print(fact)

# # fibonacci series
# # n=int(input())
# # a,b=0,1
# # for i in range(n):
# #     print(a,end=" ")
# #     a,b=b, a+b

# # count vowels in a string

# # s=input()
# # count=0
# # for ch in s:
# #     if ch.lower() in "aeiou":
# #         count+=1
# # print(count)

# # check palindrome
# # s=input()
# # if s==s[::-1]:
# #     print("yes")
# # else:
# #     print("no")

# # interview questions

# # Read rows and columns
# r, c = map(int, input().split())

# # Read grid
# grid = []
# for _ in range(r):
#     grid.append(list(map(int, input().split())))

# cost1 = 0  # pattern starting with 0 at (0,0)
# cost2 = 0  # pattern starting with 1 at (0,0)

# for i in range(r):
#     for j in range(c):
#         expected1 = (i + j) % 2        # Pattern 1
#         expected2 = 1 - expected1      # Pattern 2

#         if grid[i][j] != expected1:
#             if grid[i][j] == 1:
#                 cost1 += 5   # 1 → 0
#             else:
#                 cost1 += 3   # 0 → 1

#         if grid[i][j] != expected2:
#             if grid[i][j] == 1:
#                 cost2 += 5
#             else:
#                 cost2 += 3

# # Output minimum cost
# print(min(cost1, cost2))


# # Input
# n = int(input())
# ages = list(map(int, input().split()))
# success = list(map(int, input().split()))

# # Pair age and success
# players = list(zip(ages, success))

# # Sort by age, if same age then by success
# players.sort()

# # DP array: dp[i] = max success sum ending at i
# dp = [0] * n

# for i in range(n):
#     dp[i] = players[i][1]  # at least include itself
#     for j in range(i):
#         if players[j][1] <= players[i][1]:
#             dp[i] = max(dp[i], dp[j] + players[i][1])

# # Output maximum success rate
# print(max(dp))



# n = int(input())
# arr = list(map(int, input().split()))

# MOD = 1000000007
# result = 0

# while len(arr) > 1:
#     mx = max(arr)
#     mn = min(arr)

#     arr.remove(mx)
#     arr.remove(mn)

#     diff = mx - mn
#     result = (result + diff) % MOD

#     if len(arr) > 0:
#         arr.append(diff)

# print(result % MOD)




