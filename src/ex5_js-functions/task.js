let Calculator = {
    cur: 0,
    add: function (a){
        let obj = this;
        function innerAdd (a) {
            if(typeof a === 'number'){
                obj.cur += a;            
            }
            return innerAdd;       
        }  
        return innerAdd(a);   
    },
    subtract: function (a){
        let obj = this;
         function innerSubtract (a){
            if(typeof a === 'number'){
                obj.cur -=a;
            } 
            return innerSubtract;  
        }
        return innerSubtract(a);               
    },
    divide: function divide(a){
        let obj = this;
        function innerDivide (a) {
            if(typeof a === 'number' && a !== 0 && !isNaN(a)){
                obj.cur /=a;
            }
            return innerDivide;
        }
        return innerDivide(a);        
    },
    multiply: function multiply (a) {
        let obj = this;
        function innerMultiply (a) {
            if(typeof a === 'number'){
                obj.cur *=a;
            }
            return innerMultiply;                        
        }
        return innerMultiply(a);      
    },
    getResult: function getResult(){
        return this.cur
    },
    resetResult: function resetResult() {
        this.cur = 0;
        return this.cur
    }
}

module.exports = Calculator();
