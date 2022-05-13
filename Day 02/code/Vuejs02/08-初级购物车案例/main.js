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
      // let totalPrice = 0;
      // for (let item of this.books){
      //   totalPrice += item.price * item.count
      // }
      // return totalPrice;

      return this.books.reduce(function (preValue, book){
        return preValue + book.price * book.counter
      },0)
    }
  },
  filters: {
    showPrice(price) {
      return '￥'+price.toFixed(2);
    }
  }
})
