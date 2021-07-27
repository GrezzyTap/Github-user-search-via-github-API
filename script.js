document.getElementById('btn').addEventListener('click',showProfile)
function showProfile()
{
    let username=document.getElementById("gusername").value
    let url='https://api.github.com/users/'+username

    fetch(url).then(res=>res.json()).then(data=>{
        if(data.message){
            document.getElementById('res').innerHTML=`
            <h4>Profile not found!!!</h4>
            `
            document.getElementById('res1').innerHTML=""
            document.getElementById('res2').innerHTML=""
            document.getElementById('res3').innerHTML=""
            document.getElementById('res4').innerHTML=""
        }
        else
        {console.log(data)
            var search=document.getElementById("gusername").value
var originalName=search.split(' ').join('')
        document.getElementById('res').innerHTML=`

        <img src="${data.avatar_url}" class="card-img-top" />
    
        `
        
        document.getElementById('res1').innerHTML=`
        ${data.name}(${data.login})`
        document.getElementById('res2').innerHTML=`
        ${data.bio}`
        document.getElementById('res4').innerHTML=`
        <p>Followers:${data.followers}, Following:${data.following}</p>`
        if(!data.message){
        document.getElementById('res3').innerHTML=`
        <a target="_blank" href="https://www.github.com/${originalName}" class="btn btn-primary">Go to complete profile</a>
`}
        }
    }).catch(e=>{
        console.log(e)
    })
}