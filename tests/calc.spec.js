import {Calculator} from 'src/calc';

describe('calculator', ()=> {
   
    it('should add two numbers', ()=>{
        let calc = new Calculator();
        let res = calc.add(2,3);
        expect(res).toBe(5);
    });

    it('should multiply', ()=> {
       let calc = new Calculator();
       expect(calc.mul(4,5)).toBe(20);
    });

});
