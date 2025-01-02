

$(()=>{ 
    $('#navbar').load('./NavBar.html',loginifNeeded) //this syntax means that once navbar is loaded after then loginifneeded function is called
    $('#footbar').load('./footer.html')
    $('#article').load('./all-post.html')
    
    
   
})
function loginifNeeded(){
   
    let currentUser = window.localStorage.user ? JSON.parse(window.localStorage.user) : null
    if(!currentUser){
        $.post('/api/user',{},(user)=>{
            
            window.localStorage.user = JSON.stringify(user) 
            console.log("logged in as " + user.username); 
            $('#user').text(user.username)     
            
        })
    }
    else{
        console.log("resuming as "+currentUser.username);
        $('#user').text(currentUser.username)
    }
}
