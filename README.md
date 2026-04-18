# Learning Data Structures and Algorithms

## Introduction

Data Structures and Algorithms (DSA) form the foundation of computer science and software development. Data structures are ways to organize and store data efficiently, while algorithms are step-by-step procedures for solving problems. Mastering DSA is crucial for writing efficient code, acing technical interviews, and understanding how software systems work at a fundamental level.

## Why Learn Data Structures and Algorithms?

- **Efficiency**: Write faster, more memory-efficient code
- **Problem-Solving**: Develop systematic approaches to complex problems
- **Technical Interviews**: Essential for software engineering positions
- **Foundation**: Understanding of how computers and software work
- **Career Advancement**: Higher-paying roles and better opportunities
- **Scalability**: Design systems that handle growth
- **Critical Thinking**: Improve analytical and logical reasoning skills

## Prerequisites

Before diving into DSA, you should have:

- Basic programming knowledge (any language)
- Understanding of variables, loops, conditionals, and functions
- Familiarity with a programming language (Python, Java, C++, JavaScript recommended)
- Basic mathematics (algebra, logic)

## Time and Space Complexity

### Big O Notation
Understanding algorithm efficiency:

- **O(1)**: Constant time - access array element
- **O(log n)**: Logarithmic time - binary search
- **O(n)**: Linear time - iterate through array
- **O(n log n)**: Linearithmic time - merge sort
- **O(n²)**: Quadratic time - nested loops
- **O(2^n)**: Exponential time - recursive fibonacci

### Common Complexity Classes
- **Best Case**: Minimum time for any input
- **Average Case**: Expected time for random input
- **Worst Case**: Maximum time for any input

## Basic Data Structures

### Arrays
Fixed-size, contiguous memory locations.

```python
# Python array operations
arr = [1, 2, 3, 4, 5]

# Access: O(1)
print(arr[0])  # 1

# Insert at end: O(1) amortized
arr.append(6)

# Insert at position: O(n)
arr.insert(2, 10)

# Delete: O(n)
arr.remove(3)

# Search: O(n)
if 4 in arr:
    print("Found")
```

**Time Complexity:**
- Access: O(1)
- Search: O(n)
- Insert/Delete: O(n)

### Linked Lists

### Singly Linked List
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

# Usage
ll = LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.display()  # 1 -> 2 -> 3 -> None
```

**Time Complexity:**
- Access: O(n)
- Search: O(n)
- Insert/Delete at head: O(1)
- Insert/Delete at position: O(n)

### Doubly Linked List
```python
class DoublyNode:
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, data):
        new_node = DoublyNode(data)
        if not self.head:
            self.head = self.tail = new_node
            return
        self.tail.next = new_node
        new_node.prev = self.tail
        self.tail = new_node
```

### Stacks
LIFO (Last In, First Out) structure.

```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        return None

    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        return None

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

# Usage
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.pop())  # 3
print(stack.peek())  # 2
```

**Applications:**
- Function call stack
- Expression evaluation
- Undo operations
- Browser back button

**Time Complexity:** All operations O(1)

### Queues
FIFO (First In, First Out) structure.

```python
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if not self.is_empty():
            return self.items.pop(0)
        return None

    def front(self):
        if not self.is_empty():
            return self.items[0]
        return None

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

# Usage
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print(queue.dequeue())  # 1
print(queue.front())    # 2
```

**Time Complexity:**
- Enqueue: O(1)
- Dequeue: O(n) (can be optimized with linked list)

### Hash Tables
Key-value pairs with fast lookup.

```python
# Python dictionary (built-in hash table)
hash_table = {}

# Insert: O(1) average
hash_table['name'] = 'Alice'
hash_table['age'] = 30

# Access: O(1) average
print(hash_table['name'])  # Alice

# Delete: O(1) average
del hash_table['age']

# Check existence: O(1) average
if 'name' in hash_table:
    print("Key exists")
```

**Collision Resolution:**
- Separate Chaining
- Open Addressing (Linear Probing, Quadratic Probing)

**Time Complexity:** O(1) average case, O(n) worst case

## Trees

### Binary Trees
```python
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, val):
        if not self.root:
            self.root = TreeNode(val)
            return

        queue = [self.root]
        while queue:
            node = queue.pop(0)
            if not node.left:
                node.left = TreeNode(val)
                return
            elif not node.right:
                node.right = TreeNode(val)
                return
            queue.extend([node.left, node.right])

    def inorder_traversal(self, node, result):
        if node:
            self.inorder_traversal(node.left, result)
            result.append(node.val)
            self.inorder_traversal(node.right, result)

# Usage
bt = BinaryTree()
for val in [5, 3, 7, 2, 4, 6, 8]:
    bt.insert(val)

result = []
bt.inorder_traversal(bt.root, result)
print(result)  # [2, 3, 4, 5, 6, 7, 8]
```

### Binary Search Trees (BST)
```python
class BSTNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, val):
        if not self.root:
            self.root = BSTNode(val)
            return

        current = self.root
        while True:
            if val < current.val:
                if current.left:
                    current = current.left
                else:
                    current.left = BSTNode(val)
                    break
            else:
                if current.right:
                    current = current.right
                else:
                    current.right = BSTNode(val)
                    break

    def search(self, val):
        current = self.root
        while current:
            if val == current.val:
                return True
            elif val < current.val:
                current = current.left
            else:
                current = current.right
        return False

# Usage
bst = BinarySearchTree()
for val in [5, 3, 7, 2, 4, 6, 8]:
    bst.insert(val)

print(bst.search(4))  # True
print(bst.search(9))  # False
```

**Time Complexity:** O(log n) average, O(n) worst case

### Heaps
```python
import heapq

# Min-heap
heap = []
heapq.heappush(heap, 3)
heapq.heappush(heap, 1)
heapq.heappush(heap, 4)
heapq.heappush(heap, 2)

print(heapq.heappop(heap))  # 1
print(heapq.heappop(heap))  # 2

# Max-heap (using negative values)
max_heap = []
heapq.heappush(max_heap, -3)
heapq.heappush(max_heap, -1)
heapq.heappush(max_heap, -4)
print(-heapq.heappop(max_heap))  # 4
```

## Graphs

### Graph Representations

#### Adjacency List
```python
class Graph:
    def __init__(self):
        self.adj_list = {}

    def add_vertex(self, vertex):
        if vertex not in self.adj_list:
            self.adj_list[vertex] = []

    def add_edge(self, v1, v2):
        if v1 not in self.adj_list:
            self.add_vertex(v1)
        if v2 not in self.adj_list:
            self.add_vertex(v2)
        self.adj_list[v1].append(v2)
        self.adj_list[v2].append(v1)  # For undirected graph

    def display(self):
        for vertex in self.adj_list:
            print(f"{vertex}: {self.adj_list[vertex]}")

# Usage
g = Graph()
g.add_edge('A', 'B')
g.add_edge('A', 'C')
g.add_edge('B', 'D')
g.display()
# A: ['B', 'C']
# B: ['A', 'D']
# C: ['A']
# D: ['B']
```

#### Adjacency Matrix
```python
class GraphMatrix:
    def __init__(self, vertices):
        self.vertices = vertices
        self.adj_matrix = [[0] * vertices for _ in range(vertices)]

    def add_edge(self, v1, v2):
        self.adj_matrix[v1][v2] = 1
        self.adj_matrix[v2][v1] = 1  # For undirected graph

    def display(self):
        for row in self.adj_matrix:
            print(row)
```

### Graph Traversal

#### Breadth-First Search (BFS)
```python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    result = []

    while queue:
        vertex = queue.popleft()
        result.append(vertex)

        for neighbor in graph.adj_list[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

    return result

# Usage
print(bfs(g, 'A'))  # ['A', 'B', 'C', 'D']
```

#### Depth-First Search (DFS)
```python
def dfs(graph, vertex, visited, result):
    visited.add(vertex)
    result.append(vertex)

    for neighbor in graph.adj_list[vertex]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited, result)

def dfs_traversal(graph, start):
    visited = set()
    result = []
    dfs(graph, start, visited, result)
    return result

# Usage
print(dfs_traversal(g, 'A'))  # ['A', 'B', 'D', 'C']
```

## Algorithms

### Sorting Algorithms

#### Bubble Sort
```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# Usage
arr = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(arr))  # [11, 12, 22, 25, 34, 64, 90]
```
**Time Complexity:** O(n²)

#### Quick Sort
```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + middle + quick_sort(right)

# Usage
arr = [64, 34, 25, 12, 22, 11, 90]
print(quick_sort(arr))  # [11, 12, 22, 25, 34, 64, 90]
```
**Time Complexity:** O(n log n) average, O(n²) worst case

#### Merge Sort
```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0

    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Usage
arr = [64, 34, 25, 12, 22, 11, 90]
print(merge_sort(arr))  # [11, 12, 22, 25, 34, 64, 90]
```
**Time Complexity:** O(n log n)

### Searching Algorithms

#### Linear Search
```python
def linear_search(arr, target):
    for i, element in enumerate(arr):
        if element == target:
            return i
    return -1

# Usage
arr = [64, 34, 25, 12, 22, 11, 90]
print(linear_search(arr, 22))  # 4
print(linear_search(arr, 100))  # -1
```
**Time Complexity:** O(n)

#### Binary Search
```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1

# Usage (array must be sorted)
arr = [11, 12, 22, 25, 34, 64, 90]
print(binary_search(arr, 22))  # 2
print(binary_search(arr, 100))  # -1
```
**Time Complexity:** O(log n)

### Recursion

#### Factorial
```python
def factorial(n):
    if n == 0 or n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120
```

#### Fibonacci
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))  # 55

# Memoized version (Dynamic Programming)
def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci_memo(n - 1, memo) + fibonacci_memo(n - 2, memo)
    return memo[n]

print(fibonacci_memo(10))  # 55
```

### Dynamic Programming

#### Knapsack Problem
```python
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]

    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i-1][w], dp[i-1][w - weights[i-1]] + values[i-1])
            else:
                dp[i][w] = dp[i-1][w]

    return dp[n][capacity]

# Usage
weights = [2, 3, 4, 5]
values = [3, 4, 5, 6]
capacity = 5
print(knapsack(weights, values, capacity))  # 7
```

## Advanced Topics

### Greedy Algorithms
- Make locally optimal choices
- Examples: Activity Selection, Huffman Coding, Kruskal's MST

### Divide and Conquer
- Break problem into subproblems
- Examples: Merge Sort, Quick Sort, Binary Search

### Backtracking
- Try all possibilities, backtrack when stuck
- Examples: N-Queens, Sudoku Solver, Subset Sum

### Graph Algorithms
- Shortest Path: Dijkstra, Bellman-Ford, Floyd-Warshall
- Minimum Spanning Tree: Kruskal, Prim
- Topological Sort, Strongly Connected Components

## Practice Resources

### Online Platforms
- [LeetCode](https://leetcode.com/): 2000+ problems
- [HackerRank](https://www.hackerrank.com/): Algorithm challenges
- [CodeSignal](https://codesignal.com/): Interview preparation
- [GeeksforGeeks](https://www.geeksforgeeks.org/): Tutorials and problems

### Books
- "Introduction to Algorithms" by Cormen et al. (CLRS)
- "Algorithms" by Robert Sedgewick
- "The Algorithm Design Manual" by Steven Skiena
- "Cracking the Coding Interview" by Gayle Laakmann McDowell

### Courses
- [Algorithms Specialization](https://www.coursera.org/specializations/algorithms) on Coursera
- [MIT 6.006 Introduction to Algorithms](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/)
- [Stanford Algorithms](https://www.coursera.org/learn/algorithms-divide-conquer)

### YouTube Channels
- [Abdul Bari](https://www.youtube.com/c/AbdulBari): Algorithm visualizations
- [mycodeschool](https://www.youtube.com/c/mycodeschool): Data structures
- [freeCodeCamp](https://www.youtube.com/c/Freecodecamp): Algorithm explanations

## Learning Path

1. **Week 1-2**: Arrays, Strings, Basic Math
2. **Week 3-4**: Linked Lists, Stacks, Queues
3. **Week 5-6**: Trees, Binary Search Trees, Heaps
4. **Week 7-8**: Hash Tables, Graphs, Graph Traversal
5. **Week 9-10**: Sorting, Searching, Recursion
6. **Week 11-12**: Dynamic Programming, Greedy Algorithms
7. **Week 13-16**: Advanced Topics, Practice Problems
8. **Ongoing**: Interview Practice, System Design

## Tips for Success

- **Practice Daily**: Consistency is key
- **Understand Concepts**: Don't just memorize solutions
- **Analyze Complexity**: Always consider time and space
- **Implement from Scratch**: Avoid copy-pasting
- **Use Multiple Languages**: Practice in different languages
- **Debug Thoroughly**: Learn to find and fix bugs
- **Study Patterns**: Recognize common problem patterns
- **Review Regularly**: Revisit concepts periodically

## Common Interview Topics

- Array manipulation, Two pointers, Sliding window
- Linked list operations, Cycle detection
- Tree traversals, BST operations
- Graph algorithms, Shortest paths
- Dynamic programming problems
- Bit manipulation, Math problems

Data structures and algorithms are fundamental to computer science. They not only help you write better code but also develop your problem-solving skills. Start with basics, practice consistently, and gradually tackle more complex problems. Remember, mastery comes with time and practice!

Happy coding!