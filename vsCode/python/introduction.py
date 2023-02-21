def countPrime(n):
    x=2
    count=0
    arr=[]
    num=str(n)
    while len(arr)<n:
        flag=1
        for i in range(2,x):
            if x%i==0:
                flag=0
                break
        if flag==1:
            arr.append(x)
            count+=1
        if count==n:
            break
        x+=1
    return arr
def main():
    n=int(input()) 
    print(countPrime(n))
main()               
