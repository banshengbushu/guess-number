class CompareNumber{
    static compareNumber(input,answer){
        const inputs = input.split('');
        const corrects = answer.split('');
        let a = 0;
        let b =0;
        inputs.find(input =>  {
            corrects.map(correct=>{
                if(input=== correct){
                    inputs.indexOf(input) === corrects.indexOf(correct)?a++:b++;
                }
            })
        });
        return`${a}A${b}B`;
    }
}
module.exports = CompareNumber;