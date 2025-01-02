let navlinks = $('.navbar-nav .nav-link')
navlinks.click((ev)=>{
    let componentUrl = `./${$(ev.target).attr('data-component')}.html`
    $('.nav-item .active').removeClass('active')
    $(`[data-components=${$(ev.target).attr('data-component')}]`).addClass('active')
    $('#article').load(`${componentUrl}`)
})