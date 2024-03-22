# EZQueueJS
A very easy and lightweight JavaScript library for working with Queue data structure.

# EZListJS

EZQueueJS is a lightweight and easy-to-use JavaScript library designed for working with queue data structures. With EZQueueJS, you can effortlessly manage and manipulate queue in your JavaScript applications.

## License

EZQueueJS is licensed under the [MIT License](LICENSE).

## Features

- **Simplicity**: EZQueueJS provides a straightforward interface for creating, modifying, and traversing queue.
- **Lightweight**: With minimal dependencies and efficient implementation, EZQueueJS offers high performance while keeping your project's footprint small.
- **Flexibility**: EZQueueJS is highly adaptable and can be easily integrated into various JavaScript projects, from small scripts to large-scale applications.

Whether you're a beginner learning about data structures or an experienced developer needing a reliable tool for managing queue, EZQueueJS is here to simplify your workflow and empower your projects.

## Installation

To start using EZQueueJS in your project, simply install it via npm:

```bash
npm install ezqueuejs
```

```js
// Import the LinkedList class from EZListJS
const { Queue } = require('ezqueuejs');

// Create a new linked list
const queue = new Queue();
```

## Method Documentation

EZQueueJS provides a variety of methods for creating, modifying, and interacting with linked lists. Below is an overview of the available methods along with their descriptions and usage examples:

### `.enqueue(item)`

This method inserts the data into the queue

#### Parameters:

- `item`: The item you want to insert to the queue.

### `.dequeue()`

The method dequeues the first data and return it.

### Returns:
- `Any`
  - Your first item in the queue.

### `.peek()`

This method returns the first data (does not remove it).

#### Returns:
- `Any`
  - Your first item in the queue.

### `.size()`

This method returns the number of items in the queue.

#### Returns:
- `Number(int)`
    - The number of items in the queue.

### `.isEmpty()`

This method indicates whether the queue is empty or not.

#### Returns:

- `Boolean` 
  - `true`: Queue is empty.
  - `false`: Queue is not empty.

### `.fit()`

This method clears out-of-queue data. That is, if you insert a data into the queue and then it is deleted, in fact, that data is still in your queue, but it will not be shown in the work area of your queue. This method is implemented in such a way that you can use this method if you want to completely remove that extra hidden data.

### `.toArray()`

This method pours all the data of the queue into an array and returns it.

#### Returns:

- `Array`.
    - An array of all elements in the array

### `.toReverseArray()`

This method puts all elements of the queue in reverse order in the array and returns it.

#### Returns:

- `Array`.
    - An array of all elements in the reverse array

### `.clear()`

This method clears all elements of your queue and empties the queue.


Explore the various methods to effectively manage and manipulate queue using EZQueueJS in your JavaScript applications.


## Advanced Topic: Time Complexity Analysis

Understanding the time complexity of each method can help you optimize your code and make informed decisions when working with large datasets in EZQueueJS.

Below is an analysis of the time complexity for each method in the EZQueueJS library:

### Time Complexity `.enqueue()`:
- O(1)

### Time Complexity `.dequeue()`:
- O(1)

### Time Complexity `.peek()`:
- O(1)

### Time Complexity `.size()`:
- O(1)

### Time Complexity `.isEmpty()`:
- O(1)

### Time Complexity `.fit()`:
- O(n)

### Time Complexity `.toArray()`:
- O(n)

### Time Complexity `.toReverseArray()`:
- O(n)

### Time Complexity `.clear()`:
- O(1)
