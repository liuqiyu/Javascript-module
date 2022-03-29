let myModule = {
  data: 'www.baidu.com',
  foo () {
    console.log(`foo() ${this.data}`)
  },
  bar () {
    console.log(`bar() ${this.data}`)
  }
}
myModule.data = 'other data' // 能直接修改模块内部的数据
myModule.foo() // foo() other data
