### v-on修饰符
* 在某些情况下，我们拿到event的目的可能是进行一些事件处理
* Vue提供了修饰符来帮助我们方便的处理一些事件：
    * .stop
    * .prevent
    * .{keyCode|keyAlias} 只当事件是从特定键触发时才触发回调
    * .native 监听组件根元素的原生事件
    * .once 只触发一次回调


