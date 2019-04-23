# MiaoV
## lesson_01：一些入门的小任务
### task_01：鼠标移入移出显示隐藏提醒框
### task_02：鼠标移入移出改变Div的样式
### task_03：点击展开缩小菜单
### task_04：简单图片展示效果
    三元运算符：
    a?b:c--->if(a)b;c
    如果条件A为真，那么执行B，如果条件为假，那么执行C
### task_05：网页换肤
    未完成
    JS没有报错，但是不能运行
### task_06：Tab选项卡
    word-spacing 属性增加或减少单词间的空白（即字间隔）。
    
    解释一下display的几个常用的属性值，inline ， block， inline-block
    inline:
    使元素变成行内元素，拥有行内元素的特性，即可以与其他行内元素共享一行，不会独占一行. 
    不能更改元素的height，width的值，大小由内容撑开. 
    可以使用padding，margin的left和right产生边距效果，但是top和bottom就不行.
    block:
    使元素变成块级元素，独占一行，在不设置自己的宽度的情况下，块级元素会默认填满父级元素的宽度. 
    能够改变元素的height，width的值. 
    可以设置padding，margin的各个属性值，top，left，bottom，right都能够产生边距效果.
     inline-block:
    结合了inline与block的一些特点，结合了上述inline的第1个特点和block的第2,3个特点.
    用通俗的话讲，就是不独占一行的块级元素。
### task_07：导航
    BOM，javascript计时事件 http://www.runoob.com/js/js-timing.html                     
    setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
    setTimeout() - 在指定的毫秒数后执行指定代码。
    
    1000毫秒等于一秒
    
    clearInterval(timer)的作用只是将定时器停止，但是timer变量本身还是存在的
    clearInterval(timer)达到保留对象的作用以便于再次使用;
    两个都能达到关闭定时器的作用，但是timer=null后，timer变量会被当做垃圾被系统回收，无法再次启动原来的timer；
    再次使用需要重新定义一个新变量var timer=setInterval(function(){abc()},3000);
    在关闭定时器时，一般使用clearInterval(timer)就可以了。
    如果需要使用timer对象来判断定时器是否存在进而再做一些其他操作，在清空定时器之后需要timer=null.
### task_08：左右滚动图片
### task_09：上下滚动图片
    longdesc 属性规定指向图像描述信息页面的 URL。
    项目暂停，越来越难了
### task_10：QQ延时提醒框
### task_11：星级评分
### task_12：简易年历
### task_13：简易时钟
### task_14：网上商城商品列表