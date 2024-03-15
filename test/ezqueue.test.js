const { Queue } = require('../src/ezqueue.dev');

let queue;

beforeEach(() => {
    queue = new Queue();
});

describe('Test .isEmpty', () => {
    it('Unit 1', () => {
        let actual = queue.isEmpty();
        let expected = true;

        expect(actual).toEqual(expected);
    });

    it('Unit 2', () => {
        queue.enqueue('item 1');
        queue.enqueue('item 2');

        let actual = queue.isEmpty();
        let expected = false;

        expect(actual).toEqual(expected);
    });
});

describe('Test .enqueue & .toArray', () => {
    it('Unit 1', () => {
        queue.enqueue('item 1');

        let actual = queue.toArray();
        let expected = ['item 1'];

        expect(actual).toEqual(expected);
    });

    it('Unit 2', () => {
        queue.enqueue('item 1');
        queue.enqueue('item 2');
        queue.enqueue('item 3');
        queue.enqueue('item 4');

        let actual = queue.toArray();
        let expected = ['item 1', 'item 2', 'item 3', 'item 4'];

        expect(actual).toEqual(expected);
    });
});

describe('Test .enqueue & .size', () => {
    it('Unit 1', () => {
        let actual = queue.size();
        let expected = 0;

        expect(actual).toEqual(expected);
    });

    it('Unit 2', () => {
        queue.enqueue('item 1');
        queue.enqueue('item 2');
        queue.enqueue('item 3');

        let actual = queue.size();
        let expected = 3;

        expect(actual).toEqual(expected);
    });
});

describe('Test .dequeue & .toArray', () => {
    it('Unit 1', () => {
        let item = 'item 1';
        queue.enqueue(item);
        let result = queue.dequeue();

        let actual = queue.toArray();
        let expected = [];

        expect(actual).toEqual(expected);
        expect(result).toEqual(item);
    });

    it('Unit 2', () => {
        let result = queue.dequeue();

        let actual = queue.toArray();
        let expected = [];

        expect(actual).toEqual(expected);
        expect(result).toBeUndefined();
    });
});

describe('Test .dequeue & .size', () => {
    it('Unit 1', () => {
        queue.enqueue('item 1');
        queue.enqueue('item 2');
        queue.enqueue('item 3');
        queue.enqueue('item 4');

        queue.dequeue();
        queue.dequeue();

        let actual = queue.toArray();
        let expected = ['item 3', 'item 4'];
        let size = queue.size();

        expect(actual).toEqual(expected);
        expect(size).toEqual(2);
    });

    it('Unit 2', () => {
        queue.dequeue();

        let actual = queue.toArray();
        let expected = [];
        let size = queue.size();

        expect(actual).toEqual(expected);
        expect(size).toEqual(0);
    });
});

describe('Test .peek', () => {
    it('Unit 1', () => {
        queue.enqueue('item 1');
        queue.enqueue('item 2');
        queue.enqueue('item 3');
        queue.enqueue('item 4');

        let actual = queue.peek();
        let expected = 'item 1';

        expect(actual).toEqual(expected);
    });

    it('Unit 2', () => {
        let actual = queue.peek();

        expect(actual).toBeUndefined();
    });
});

describe('Test .toReverseArray', () => {
    it('Unit 1', () => {
        queue.enqueue('item 1');
        queue.enqueue('item 2');
        queue.enqueue('item 3');
        queue.enqueue('item 4');

        let actual = queue.toReverseArray();
        let expected = ['item 4', 'item 3', 'item 2', 'item 1'];

        expect(actual).toEqual(expected);
    });

    it('Unit 2', () => {
        let actual = queue.toReverseArray();
        let expected = [];

        expect(actual).toEqual(expected);
    });
});

describe('Test .fit & .toArray', () => {
    it('Unit 1', () => {
        queue.enqueue('item 1');
        queue.enqueue('item 2');
        queue.enqueue('item 3');
        queue.enqueue('item 4');

        queue.dequeue();
        queue.dequeue();
        queue.fit();

        let actual = queue.toArray();
        let expected = ['item 3', 'item 4'];

        expect(actual).toEqual(expected);
    });

    it('Unit 2', () => {
        queue.fit();

        let actual = queue.toArray();
        let expected = [];

        expect(actual).toEqual(expected);
    });
});

describe('Test .fit & .toArray & .size', () => {
    it('Unit 1', () => {
        queue.enqueue('item 1');
        queue.enqueue('item 2');
        queue.enqueue('item 3');
        queue.enqueue('item 4');

        queue.clear();

        let actual = queue.toArray();
        let size = queue.size();
        let expected = [];

        expect(actual).toEqual(expected);
        expect(size).toEqual(0);
    });

    it('Unit 2', () => {
        queue.clear();

        let actual = queue.toArray();
        let size = queue.size();
        let expected = [];

        expect(actual).toEqual(expected);
        expect(size).toEqual(0);
    });
});
