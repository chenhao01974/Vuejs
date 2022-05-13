# v-if和v-show的区别

### v-if
 当条件为fasle时，包含v-if的指令的元素，根本就不存在在DOM中
 
### v-show
 当我们条件为false
 asle时，v-show只是给元素增加了一个行内样式，display:none
 
### 开发中如何选择：
* 当需要在显示和隐藏之间来回切换时，使用v-show
* 当只有一次切换时，用v-if