import {singleton} from 'needlepoint'

@singleton
export default class Test1{
    constructor(){}
    test(){
        console.log("Test");
    }
}