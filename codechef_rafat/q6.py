(n,k)=map(int,input().split(' '))

a=0

for i in range(n):
    y=int(input())
    if y%k==0:
        a+=1
print(a)