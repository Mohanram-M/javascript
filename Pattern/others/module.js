/*
    Module pattern allows us to achive true encapsulation
    i.e, it alows to have private variables in JS
    Disadvantages :
        any bug with the private function /variable cannot be extended and fixed
        when we wish to change the visibility then we have tochange it all ove the place
        beacuse private and public members are accesd differently.
        It is simply not possible to patch private members in buggy code.
*/

var basketModule = (function(){

    var basket=[];

    function somePrivateMethod(){
        console.log('somePrivateMethod');
    }

    function someOtherPrivateMethod(){
        console.log('someOtherPrivateMethod');
    }

    return {
        addItems:function(values){
            basket.push(values);
        },
        getItemCount:function(){
            return basket.length;
        },
        getTotalPrice:function(){
            let len=basket.length;
            let q=0;

            while(len){
                q+=basket[len].price;
                len--;
            }
            return q;
        },
        doSomething:somePrivateMethod
    };
})();


basketModule.addItems({
    'name':'bread',
    'price':20
});

basketModule.addItems({
    'name':'butter',
    'price':30
});

console.log(basketModule.getItemCount());
console.log(basketModule.getTotalPrice());