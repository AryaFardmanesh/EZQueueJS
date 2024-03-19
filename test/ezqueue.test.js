const { Queue } = require('../src/ezqueue.dev');

let queue;

beforeEach(() => {
    queue = new Queue();
});

describe('Test .enqueue method - Group', () => {
    describe('Test with .toArray method - Group', () => {
        it('It should queue the data correctly and be in the specified array - Unit 1', () => {
            queue.enqueue('item 1');

            let actual = queue.toArray();
            let expected = ['item 1'];

            expect(actual).toEqual(expected);
        });

        it('It should queue the data correctly and be in the specified array - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');
            queue.enqueue('item 4');

            let actual = queue.toArray();
            let expected = ['item 1', 'item 2', 'item 3', 'item 4'];

            expect(actual).toEqual(expected);
        });

        it('It should queue the data correctly and be in the specified array - Unit 3', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            let actual = queue.toArray();
            let expected = ['item 1', 'item 2', 'item 3'];

            expect(actual).toEqual(expected);
        });
    });

    describe('Test with .size method - Group', () => {
        it('It must properly enqueue the data and be specified in size - Unit 1', () => {
            queue.enqueue('item 1');

            let actual = queue.size();
            let expected = 1;
    
            expect(actual).toEqual(expected);
        });

        it('It must properly enqueue the data and be specified in size - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');
    
            let actual = queue.size();
            let expected = 3;
    
            expect(actual).toEqual(expected);
        });

        it('It must properly enqueue the data and be specified in size - Unit 3', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');
            queue.enqueue('item 4');
            queue.enqueue('item 5');
    
            let actual = queue.size();
            let expected = 5;
    
            expect(actual).toEqual(expected);
        });
    });
});

describe('Test .dequeue method - Group', () => {
    describe('Test with .toArray method - Group', () => {
        it('It should correctly remove the first data from the queue - Unit 1', () => {
            queue.enqueue('item 1');

            queue.dequeue();

            let actual = queue.toArray();
            let expected = [];

            expect(actual).toEqual(expected);
        });

        it('It should correctly remove the first data from the queue - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');

            queue.dequeue();

            let actual = queue.toArray();
            let expected = ['item 2'];

            expect(actual).toEqual(expected);
        });

        it('It should correctly remove the first data from the queue - Unit 3', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');
            queue.enqueue('item 4');

            queue.dequeue();
            queue.dequeue();

            let actual = queue.toArray();
            let expected = ['item 3', 'item 4'];

            expect(actual).toEqual(expected);
        });

        describe('Test with empty queue - Group', () => {
            it('It should not do anything on an empty queue - Unit 1', () => {
                queue.dequeue();

                let actual = queue.toArray();
                let expected = [];

                expect(actual).toEqual(expected);
            });

            it('It should not do anything on an empty queue - Unit 2', () => {
                queue.dequeue();
                queue.dequeue();

                let actual = queue.toArray();
                let expected = [];

                expect(actual).toEqual(expected);
            });

            it('It should not do anything on an empty queue - Unit 3', () => {
                queue.dequeue();
                queue.dequeue();
                queue.dequeue();

                let actual = queue.toArray();
                let expected = [];

                expect(actual).toEqual(expected);
            });

            it('It should not do anything on an empty queue - Unit 4', () => {
                queue.dequeue();
                queue.dequeue();
                queue.dequeue();
                queue.dequeue();
                queue.dequeue();

                let actual = queue.toArray();
                let expected = [];

                expect(actual).toEqual(expected);
            });
        });
    });

    describe('Test with .size method - Group', () => {
        it('It should correctly remove the first data from the queue - Unit 1', () => {
            queue.enqueue('item 1');

            queue.dequeue();

            let actual = queue.size();
            let expected = 0;

            expect(actual).toEqual(expected);
        });

        it('It should correctly remove the first data from the queue - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');
            queue.enqueue('item 4');

            queue.dequeue();
            queue.dequeue();

            let actual = queue.size();
            let expected = 2;

            expect(actual).toEqual(expected);
        });

        it('It should correctly remove the first data from the queue - Unit 3', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.dequeue();
            queue.dequeue();

            let actual = queue.size();
            let expected = 1;

            expect(actual).toEqual(expected);
        });

        describe('Test with empty queue - Group', () => {
            it('It should not do anything on an empty queue - Unit 1', () => {
                queue.dequeue();

                let actual = queue.size();
                let expected = 0;

                expect(actual).toEqual(expected);
            });

            it('It should not do anything on an empty queue - Unit 2', () => {
                queue.dequeue();
                queue.dequeue();

                let actual = queue.size();
                let expected = 0;

                expect(actual).toEqual(expected);
            });

            it('It should not do anything on an empty queue - Unit 3', () => {
                queue.dequeue();
                queue.dequeue();
                queue.dequeue();

                let actual = queue.size();
                let expected = 0;

                expect(actual).toEqual(expected);
            });

            it('It should not do anything on an empty queue - Unit 4', () => {
                queue.dequeue();
                queue.dequeue();
                queue.dequeue();
                queue.dequeue();
                queue.dequeue();

                let actual = queue.size();
                let expected = 0;

                expect(actual).toEqual(expected);
            });
        });
    });
});

describe('Test .peek method - Group', () => {
    describe('Test solo - Group', () => {
        it('It should correctly select the first data and return it - Unit 1', () => {
            queue.enqueue('item 1');

            let actual = queue.peek();
            let expected = 'item 1';

            expect(actual).toEqual(expected);
        });

        it('It should correctly select the first data and return it - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            let actual = queue.peek();
            let expected = 'item 1';

            expect(actual).toEqual(expected);
        });
    });

    describe('Test with empty queue - Group', () => {
        it('It should return the undefined - Unit 1', () => {

            let actual = queue.peek();
            let expected = undefined;

            expect(actual).toEqual(expected);
        });

        it('It should return the undefined - Unit 2', () => {
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.dequeue();
            queue.dequeue();

            let actual = queue.peek();
            let expected = undefined;

            expect(actual).toEqual(expected);
        });
    });

    describe('Test with .dequeue method - Group', () => {
        it('It should correctly select the first data and return it - Unit 1', () => {
            queue.enqueue('item 1');

            let actual = queue.peek();
            let expected = 'item 1';

            expect(actual).toEqual(expected);
        });

        it('It should correctly select the first data and return it - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.dequeue();

            let actual = queue.peek();
            let expected = 'item 2';

            expect(actual).toEqual(expected);
        });
    });

    describe('Test with .isEmpty method method - Group', () => {
        it('It should not cause any data to be removed from the queue - Unit 1', () => {
            queue.enqueue('item');

            queue.peek();

            let actual = queue.isEmpty();
            let expected = false;

            expect(actual).toEqual(expected);
        });

        it('It should not cause any data to be removed from the queue - Unit 2', () => {
            queue.enqueue('item');
            queue.enqueue('item');

            queue.peek();
            queue.peek();

            let actual = queue.isEmpty();
            let expected = false;

            expect(actual).toEqual(expected);
        });
    });

    describe('Test with .toArray method - Group', () => {
        it('It should not cause any data to be removed from the queue - Unit 1', () => {
            queue.enqueue('item');

            queue.peek();

            let actual = queue.toArray();
            let expected = ['item'];

            expect(actual).toEqual(expected);
        });

        it('It should not cause any data to be removed from the queue - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');

            queue.peek();
            queue.peek();

            let actual = queue.toArray();
            let expected = ['item 1', 'item 2'];

            expect(actual).toEqual(expected);
        });
    });

    describe('Test with .size method - Group', () => {
        it('It should not cause the queue size to change - Unit 1', () => {
            queue.enqueue('item');

            queue.peek();

            let actual = queue.size();
            let expected = 1;

            expect(actual).toEqual(expected);
        });

        it('It should not cause the queue size to change - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');

            queue.peek();
            queue.peek();

            let actual = queue.size();
            let expected = 2;

            expect(actual).toEqual(expected);
        });

        it('It should not cause the queue size to change - Unit 3', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.peek();

            let actual = queue.size();
            let expected = 3;

            expect(actual).toEqual(expected);
        });
    });
});

describe('Test .isEmpty method - Group', () => {
    describe('Test solo - Group', () => {
        it('It should return true - Unit 1', () => {
            let actual = queue.isEmpty();
            let expected = true;

            expect(actual).toEqual(expected);
        });
    });

    describe('Test with .enqueue method - Group', () => {
        it('It should return false - Unit 1', () => {
            queue.enqueue('item');

            let actual = queue.isEmpty();
            let expected = false;

            expect(actual).toEqual(expected);
        });

        it('It should return false - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');

            let actual = queue.isEmpty();
            let expected = false;

            expect(actual).toEqual(expected);
        });
    });

    describe('Test with .dequeue method - Group', () => {
        it('It should return false - Unit 1', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');

            queue.dequeue();

            let actual = queue.isEmpty();
            let expected = false;

            expect(actual).toEqual(expected);
        });

        it('It should return false - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.dequeue();

            let actual = queue.isEmpty();
            let expected = false;

            expect(actual).toEqual(expected);
        });

        it('It should return false - Unit 3', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.dequeue();
            queue.dequeue();

            let actual = queue.isEmpty();
            let expected = false;

            expect(actual).toEqual(expected);
        });

        it('It should return true - Unit 4', () => {
            queue.enqueue('item 1');

            queue.dequeue();

            let actual = queue.isEmpty();
            let expected = true;

            expect(actual).toEqual(expected);
        });

        it('It should return true - Unit 5', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.dequeue();
            queue.dequeue();
            queue.dequeue();

            let actual = queue.isEmpty();
            let expected = true;

            expect(actual).toEqual(expected);
        });

        it('It should return true - Unit 6', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');

            queue.dequeue();
            queue.dequeue();

            let actual = queue.isEmpty();
            let expected = true;

            expect(actual).toEqual(expected);
        });
    });

    describe('Test with .peek method - Group', () => {
        it('It should return false - Unit 1', () => {
            queue.enqueue('item 1');

            queue.peek();

            let actual = queue.isEmpty();
            let expected = false;

            expect(actual).toEqual(expected);
        });

        it('It should return false - Unit 2', () => {
            queue.enqueue('item 1');

            queue.peek();
            queue.peek();

            let actual = queue.isEmpty();
            let expected = false;

            expect(actual).toEqual(expected);
        });

        it('It should return false - Unit 3', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');

            queue.peek();
            queue.peek();

            let actual = queue.isEmpty();
            let expected = false;

            expect(actual).toEqual(expected);
        });
    });

    describe('Test with .fit method - Group', () => {
        it('It should return true - Unit 1', () => {
            queue.enqueue('item 1');

            queue.dequeue();

            queue.fit();

            let actual = queue.isEmpty();
            let expected = true;

            expect(actual).toEqual(expected);
        });

        it('It should return true - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');

            queue.dequeue();
            queue.dequeue();

            queue.fit();

            let actual = queue.isEmpty();
            let expected = true;

            expect(actual).toEqual(expected);
        });

        it('It should return false - Unit 3', () => {
            queue.enqueue('item 1');

            queue.fit();

            let actual = queue.isEmpty();
            let expected = false;

            expect(actual).toEqual(expected);
        });

        it('It should return false - Unit 4', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');

            queue.fit();

            let actual = queue.isEmpty();
            let expected = false;

            expect(actual).toEqual(expected);
        });
    });
});

describe('Test .fit method - Group', () => {
    describe('Test with .peek method - Group', () => {
        it('It should correctly peek first data in queue - Unit 1', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.fit();

            let actual = queue.peek();
            let expected = 'item 1';

            expect(actual).toEqual(expected);
        });

        it('It should correctly peek first data in queue - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.dequeue();

            queue.fit();

            let actual = queue.peek();
            let expected = 'item 2';

            expect(actual).toEqual(expected);
        });

        it('It should correctly peek first data in queue - Unit 3', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.dequeue();
            queue.dequeue();

            queue.fit();

            let actual = queue.peek();
            let expected = 'item 3';

            expect(actual).toEqual(expected);
        });

        it('It should correctly peek first data in queue - Unit 4', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');
            queue.enqueue('item 4');

            queue.dequeue();
            queue.fit();
            queue.dequeue();
            queue.fit();

            let actual = queue.peek();
            let expected = 'item 3';

            expect(actual).toEqual(expected);
        });
    });

    describe('Test with .size method - Group', () => {
        it('It should not change the queue size - Unit 1', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.fit();

            let actual = queue.size();
            let expected = 3;

            expect(actual).toEqual(expected);
        });

        it('It should not change the queue size - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');
            queue.enqueue('item 4');

            queue.dequeue();

            queue.fit();

            let actual = queue.size();
            let expected = 3;

            expect(actual).toEqual(expected);
        });

        it('It should not change the queue size - Unit 3', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');

            queue.fit();
            queue.fit();

            let actual = queue.size();
            let expected = 2;

            expect(actual).toEqual(expected);
        });
    });

    describe('Test with .toArray method - Group', () => {
        it('It should not change the queue size - Unit 1', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');

            queue.fit();
            queue.fit();

            let actual = queue.toArray();
            let expected = ['item 1', 'item 2'];

            expect(actual).toEqual(expected);
        });

        it('It should not change the queue size - Unit 2', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.fit();

            let actual = queue.toArray();
            let expected = ['item 1', 'item 2', 'item 3'];

            expect(actual).toEqual(expected);
        });
    });
});

describe('Test .toArray method - Group', () => {
    it('It should return the queue data in an array in exactly the same order - Unit 1', () => {
        queue.enqueue('item 1');
        queue.enqueue('item 2');
        queue.enqueue('item 3');

        let actual = queue.toArray();
        let expected = ['item 1', 'item 2', 'item 3'];

        expect(actual).toEqual(expected);
    });

    it('It should return the queue data in an array in exactly the same order - Unit 2', () => {
        queue.enqueue('item 1');
        queue.enqueue('item 2');
        queue.enqueue('item 3');

        queue.dequeue();

        let actual = queue.toArray();
        let expected = ['item 2', 'item 3'];

        expect(actual).toEqual(expected);
    });
});

describe('Test .toReverseArray method - Group', () => {
    it('It should return the queue data in an array in reverse order - Unit 1', () => {
        queue.enqueue('item 1');
        queue.enqueue('item 2');
        queue.enqueue('item 3');

        let actual = queue.toReverseArray();
        let expected = ['item 3', 'item 2', 'item 1'];

        expect(actual).toEqual(expected);
    });

    it('It should return the queue data in an array in reverse order - Unit 2', () => {
        queue.enqueue('item 1');
        queue.enqueue('item 2');
        queue.enqueue('item 3');

        queue.dequeue();

        let actual = queue.toReverseArray();
        let expected = ['item 3', 'item 2'];

        expect(actual).toEqual(expected);
    });
});

describe('Test .clear method - Group', () => {
    describe('Test with .size method - Group', () => {
        it('It should clear the entire queue - Unit 1', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.clear();

            let actual = queue.size();
            let expected = 0;

            expect(actual).toEqual(expected);
        });

        it('It should clear the entire queue - Unit 2', () => {
            queue.clear();

            let actual = queue.size();
            let expected = 0;

            expect(actual).toEqual(expected);
        });
    });

    describe('Test with .toArray method - Group', () => {
        it('It should clear the entire queue - Unit 1', () => {
            queue.enqueue('item 1');
            queue.enqueue('item 2');
            queue.enqueue('item 3');

            queue.clear();

            let actual = queue.toArray();
            let expected = [];

            expect(actual).toEqual(expected);
        });

        it('It should clear the entire queue - Unit 2', () => {
            queue.clear();

            let actual = queue.toArray();
            let expected = [];

            expect(actual).toEqual(expected);
        });
    });
});
