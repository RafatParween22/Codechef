T=int(input())
for i in range(T):
    N,M,K=map(int,input().split())
    Y=N+K
    if Y<=M:
        print("YES")
    else:
        print("NO")