const AnswerGenerator = require('../main/answer-generator');

describe('Answer Generator', () => {
    it('should generate answer', () => {
        const isUnique = (item, index, array) => {
            return array.lastIndexOf(item) === index;
        };

        const answer = AnswerGenerator.generator();
        expect(answer.length).toEqual(4);
        expect(answer.split('').every(isUnique)).toBeTruthy();
        expect(answer).not.toEqual(AnswerGenerator.generator());
    });
});