'use strict'

// 1) Переписать функцию-конструктор MyArray на классы. 
// * Переписать методы unshift и/или push для неограниченного числа аргументов.
class MyArray{
  constructor(){
    this.length = 0;
    for(let i = 0; i < arguments.length; i++){
      this[i] = arguments[i]
    }
    this.length = arguments.length;
  }
  pushItem(value){
    this[this.length++] = value;
    return this.length;
  }
}



//2
const arr1 = new MyArray(1,2,4,3,5,6);
arr1.pushItem(10);
console.log('arr1 :>> ', arr1);

class RangeValidator{
  constructor(from, to){
    this.valueFrom = from;
    this.valueTo = to;
    if(this.valueFrom > this.valueTo){
      throw new RangeError('first parameter must be lower then second parameter')
    };
  }
  validate(value){
    return (value >= this.valueFrom && value <= this.valueTo) ? true : false;
  }
  isRangeRight(){
    return (this.valueFrom < this.valueTo) ? true : false;
  }


  set valueFrom(value){
    if(typeof value !== 'number'){
      throw new TypeError('value must be number')
    }
    if(value < 0){
      throw new RangeError('value must be bigger then 0')
    }
    this._valueFrom = value;
  }
  get valueFrom() {
    return this._valueFrom;
  }
  set valueTo(value) {
    if(typeof value !== 'number'){
      throw new TypeError('value must be number')
    }
    this._valueTo = value;
  }
  get valueTo() {
    return this._valueTo;
  }

}

const range1 = new RangeValidator(1, 10)



