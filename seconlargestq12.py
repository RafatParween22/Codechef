T=int(input())
for i in range(T):
    A,B,C=map(int,input().split())
    if A>=B and A>=C:
        if B>=C:
            print(B)
        else:
            print(C)
    elif B>=A and B>=C:
        if C>=A:
            print(C)
        else:
            print(A)
    else:
        if A>=B:
            print(A)
        else:
            print(B)
    