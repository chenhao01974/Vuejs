const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-09',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《Unix编程艺术》',
        date: '2006-02',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-03',
        price: 128.00,
        count: 1
      },
    ]
  },
  methods: {
    getFinalPrice(price) {
      return '￥'+price.toFixed(2);
    },
    increment(index){
      this.books[index].count++;
      console.log('increment',index)
    },
    decrement(index){
      this.books[index].count--;
      console.log('decrement',index)
    },
    removeHandler(index){
      this.books.splice(index,1);
    }
  },
  computed: {
    totalPrice(){
      //1、普通的for循环
      // let totalPrice = 0;
      // for (let i = 0; i < this.books.length; i++) {
      //   totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;

      //2、for(let i in this.books)
      // let totalPrice = 0;
      // for (let i in this.books){
      //     totalPrice += this.books[i].price * this.books[i].count;
      // }
      // return totalPrice;

      //3、for(let i of this.books)
      let totalPrice = 0;
      for (let item of this.books){
        totalPrice += item.price * item.count
      }
      return totalPrice;
    }
  },
  filters: {
    showPrice(price) {
      return '￥'+price.toFixed(2);
    }
  }

})

// 编程范式： 命令式编程/声明式编程
// 编程格式： 面向对象编程(第一公民:对象)/函数式编程(第一公民:函数)
const nums = [10,20,30,40,111,222,444,40,23]

//1、需求：取出所有小于100的数字

