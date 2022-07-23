# cook your dish here
t=int(input())
for _ in range (t):
    x,y=map(int,input().split())
    if y<=1.07*x:
        print("yes")
    else:
        print("no")