
class F{
    constructor(name,age){//私有的属性和方法
        this.name=name;
        this.age=age
    }
    //公有的方法和属性prototype上的
    aa(){
         console.log(this.name)
    }
    static bb(){//静态属性和方法是F私有的和实例无关
         console.log(this.age)
    }

}
var f=new F('alex',12);

f.aa()
F.age=100;//静态属性F私有的和实例无关  
F.bb()

class S extends F{
    constructor(name,age,color){
        super(name,age);
        this.color=color;
    }
    //子类公有
    dd(){
         console.log('子类公有')
    }
}
var s=new S('jim',11,'red')
 console.log(s)


