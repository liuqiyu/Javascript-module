require(["umd"], function(umdModule) {
    document.querySelector('h2').innerText = 'require.js方式引用了umd模块'
    document.querySelector('#content').innerText = umdModule.name
    console.log('require.js方式引用了umd模块', umdModule)
});