

function counter(n)
{
    let count=n;
    setTimeout(()=>{
        count++;
        console.log(count);
        counter(count);
    },1000)
}

counter(0);