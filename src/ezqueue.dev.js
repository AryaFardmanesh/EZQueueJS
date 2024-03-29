class Queue {
    constructor() {
        const privateMethods = {
            _queue      : [ ]           ,
            _position   : 0             ,
            _startPos   : 0             ,
            _size       : 0             ,
            _isEmpty    : function () {
                return (this._size == 0);
            }                           ,
        };

        this.enqueue = function (item) {
            privateMethods._queue[privateMethods._position] = item;
            privateMethods._position++;
            privateMethods._size++;
        }

        this.dequeue = function () {
            if (privateMethods._isEmpty())
                return;
            privateMethods._size--;
            return privateMethods._queue[privateMethods._startPos++];
        }

        this.peek = function () {
            return privateMethods._queue[privateMethods._startPos];
        }

        this.size = function () {
            return privateMethods._size;
        }

        this.isEmpty = function () {
            return privateMethods._isEmpty();
        }

        this.fit = function () {
            privateMethods._queue = this.toArray();
            privateMethods._startPos = 0;
        }

        this.toArray = function () {
            let arr = [];
            for (let i = privateMethods._startPos; i < privateMethods._queue.length; i++)
                arr[arr.length] = privateMethods._queue[i];
            return arr;
        }

        this.toReverseArray = function () {
            let arr = [];
            for (let i = privateMethods._queue.length - 1; i >= privateMethods._startPos; i--)
                arr[arr.length] = privateMethods._queue[i];
            return arr;
        }

        this.clear = function () {
            privateMethods._queue       = [ ]   ;
            privateMethods._position    = 0     ;
            privateMethods._startPos    = 0     ;
            privateMethods._size        = 0     ;
        }
    }
}

module.exports = { Queue } ;
