function showpost(){
    $.get('/api/posts',{},(posts1)=>{

        for(let element of posts1){
            $('#all-postap').append(
            $(`
            <div class="card col-4 m-2" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">${element.user.username}</h6>
              <p class="card-text">${element.body}</p>
              <a href="#" class="card-link">Like</a>
              <a href="#" class="card-link">Comment</a>
            </div>
          </div>
            `)
            )
        }
    })
}