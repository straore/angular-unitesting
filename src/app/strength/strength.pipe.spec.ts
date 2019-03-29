import { StrengthPipe } from "./strength.pipe";


describe('StrengthPipe',() => {

    it('it should display weak if strength is 5', () =>{
        //arrange
        let pipe = new StrengthPipe();
        //act
        let resut = pipe.transform(5);
        //assert
        expect(resut).toEqual('5 (weak)');
    })

    it('it should display strong if strength is 10', () =>{
        let pipe = new StrengthPipe();
        expect(pipe.transform(10)).toEqual('10 (strong)');
    })
})