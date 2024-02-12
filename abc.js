var form=document.getElementById("myform")


form.addEventListener('submit',function(e){

    e.preventDefault
    var search=document.getElementById("search").value
    var original=search.split(' ').join('')
    fetch("https:// api.github.com/users/"+original)
    .then((result)=>result.json())
    .then((data)=>{
        console.log(data)


        document.getElementById("result").innerHTML=1`
        <img src="$ {data.avatar_unrl}"/>
        `
    })
    
    
})