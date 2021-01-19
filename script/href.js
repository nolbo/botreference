$(function() {
    $('h4.con_txt').click(function() {
        location.href = `${$(this).attr('id').replace(/_/g, '/')}/index.html`;
    });

    $('h4.name').click(function() {
        if(location.pathname === '/index.html' || location.pathname === '/') {
            const parent = $(this).parent();

            location.href = `${parent.attr('data-folder')}/${parent.attr('id')}/${$(this).text().replace(/#/g, '').toLowerCase()}/index.html`
        }
    });

    $('h5.path').click(function() {
        if(location.pathname === '/index.html' || location.pathname === '/') {
            location.href = `${$(this).parent().attr('data-folder').replace(/_/g, '/')}#${$(this).text().toLowerCase()}`;
        } else {
            location.href = `../${$(this).text().toLowerCase()}/index.html`;
        }
    });

    $('i[data-link = "true"]').click(function(e) {
        location.href = `${$(this).attr('id')}/index.html`;
    });

    $('strong.link, code[data-link = "true"]').click(function() {
        if($(this).attr('data-nottab') === 'true') {
            location.href = $(this).attr('id');
        } else {
            window.open($(this).attr('id'));           
        }
    });

    $('h2.title').click(function() {
        if(location.pathname.split('/').length === 5) {
            location.href = location.origin;
        } else {
            location.href = '../';
        }
        
    })
});