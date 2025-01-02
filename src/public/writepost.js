
$('#write-btn').click(() => {
    const userID= JSON.parse(window.localStorage.user).id
    const title = $('#p-title').val()
    const body = $('#p-body').val()
    console.log(userID);
    console.log(title);
    console.log(body);
    
    $.post('/api/posts', { userID, title, body }, (data) => {
        window.alert("Post Added")
      
    })
  })
   