import {Test1} from 'Test1.js'
import {dependencies} from 'needlepoint';

@dependencies(Test1)
export default class Test2{
    constructor(test1){
        this.Test1 = test1;
        this.Test1.test();
    }
}