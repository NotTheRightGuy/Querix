
export const getUser = (user:any)=>{
    // if (isSignedIn && user){
    //     console.log(user,"usersssssssssssssssss")
    //     console.log(user.emailAddresses[0].emailAddress,"email")
        fetch('http://localhost:3000/api/saveUser',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:user.id,email:user.emailAddresses[0].emailAddress,fullName:user.fullName,imageUrl:user.imageUrl})
        })
        .then(res=>res.json())
        .then(res=>{
            window.sessionStorage.setItem("user",JSON.stringify(res))
            console.log(res,"reqturend api")
        })
    }