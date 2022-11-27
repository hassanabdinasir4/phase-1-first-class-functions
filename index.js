function  receivesAFunction(callback){
    return callback()
}
receivesAFunction(() => "Hello, Hassuke!")

function returnsANamedFunction(rabuFunc){
    return function rabuFunc(){
        return "Hello, Hassuke!"
    }
}
returnsANamedFunction()

const returnsAnAnonymousFunction = function(){
    return function(){
        return "Hello, Hassuke"
    }
}
returnsAnAnonymousFunction()