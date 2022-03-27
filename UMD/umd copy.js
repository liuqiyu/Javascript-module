(function(root, factory){
    console.log('没有模块环境，直接挂载在全局对象上')
    console.log(root)
    console.log(factory)
    root.umdModule = factory();
}(this, function () {
    return {
        name: '我是一个umd模块'
    }
}))

console.log(this)