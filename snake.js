 class Snake {
     constructor(map) {
             this.map = map
             this.snake = []
             this.direction = 'right'
             this.creSnake()

         }
         //计算蛇头出现在哪一个坐标位置
     pos() {
         //只负责计算位置，不进行赋值
         //判断一下，原先有个头根基方向判断
         // 原先没有头，直接出在0,0为主
         const head = this.snake[0]
         if (!head) return { left: 0, top: 0 }
             //有头,根据方向计算
         const obj = { left: head.offsetLeft, top: head.offsetTop }

         switch (this.direction) {
             case 'top':
                 obj.top -= 20;
                 break
             case 'left':
                 obj.left -= 20;
                 break
             case 'right':
                 obj.left += 20;
                 break
             case 'bottom':
                 obj.top += 20;
                 break
         }
         return obj
     }
     creHead() {
         const pos = this.pos()
         const head = this.snake[0]
         if (head) head.className = 'body'
         const div = document.createElement('div')
         div.className = 'head'
         div.style.left = pos.left + 'px'
         div.style.top = pos.top + 'px'
         this.snake.unshift(div)
         this.map.appendChild(div)

     }
     creSnake() {
         for (let i = 0; i < 3; i++) {
             this.creHead()
         }
     }
     move() {
         //移动一格
         //删除最后数组中的最后一个，页面最后一个，添加一个头
         //pop()删除数组最后一个，返回被删除的这个东西
         const body = this.snake.pop()

         body.remove()

         this.creHead()

     }
     isDie() {
         const head = this.snake[0]
         const x = head.offsetLeft
         const y = head.offsetTop
         if (x < 0 || y < 0 || x >= this.map.clientWidth || y >= this.map.clientHeight) {
             return true
         } else {
             // // 撞自己死亡 
             // const tmp = this.snake.slice(1)
             // let flag = false
             // tmp.forEach(item => {
             //     if (x === item.offsetLeft && y === item.offsetTop) {
             //         flag = true
             //     }

             // })
             // return flag
             return false
         }
     }

     isEat(food) {
         const x = this.snake[0].offsetLeft
         const y = this.snake[0].offsetTop
         if (x === food.x && y === food.y) {
             return true
         } else {
             return false
         }

     }
 }