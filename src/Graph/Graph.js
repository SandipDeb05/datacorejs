/**
 * datacorejs/Graph.js
 * @license MIT
 * @copyright 2023 Sandip Deb <sandipdeb05@gmail.com>
 */

/**
 * @class
 */
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /**
   * Adds a vertex to the graph's adjacency list if it doesn't already exist. Throws an error if the input vertex is undefined.
   * @param {any} vertex
   * @returns {Graph}
   */
  addVertex(vertex) {
    if (vertex === undefined) {
      throw new Error("value cannot be undefined");
    }
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
    return this;
  }

  /**
   * Adds an undirected edge between two vertices in the graph. If the vertices don't exist, they are added. Throws an error if either vertex is undefined.
   * @param {any} vertex1
   * @param {any} vertex2
   * @returns {Graph}
   */
  addEdge(vertex1, vertex2) {
    if (vertex1 === undefined || vertex2 === undefined) {
      throw new Error("values cannot be undefined");
    }
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    return this;
  }

  /**
   * Checks if there is an edge between two vertices in the graph and returns a boolean value. Throws an error if either vertex is undefined.
   * @param {any} vertex1
   * @param {any} vertex2
   * @returns {boolean}
   */
  hasEdge(vertex1, vertex2) {
    if (vertex1 === undefined || vertex2 === undefined) {
      throw new Error("values cannot be undefined");
    }
    return (
      !!this.adjacencyList[vertex1]?.find((vertex) => vertex === vertex2) &&
      !!this.adjacencyList[vertex2]?.find((vertex) => vertex === vertex1)
    );
  }

  /**
   * Checks if a vertex exists in the graph and returns a boolean value. Throws an error if the input vertex is undefined.
   * @param {any} vertex
   * @returns {boolean}
   */
  hasVertex(vertex) {
    if (vertex === undefined) {
      throw new Error("value cannot be undefined");
    }
    return !!this.adjacencyList[vertex];
  }

  /**
   * Removes the edge between two vertices in the graph. Throws an error if either vertex is undefined.
   * @param {any} vertex1
   * @param {any} vertex2
   * @returns {Graph}
   */
  removeEdge(vertex1, vertex2) {
    if (vertex1 === undefined || vertex2 === undefined) {
      throw new Error("values cannot be undefined");
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );

    return this;
  }

  /**
   * Removes a vertex and all its associated edges from the graph. Throws an error if the input vertex is undefined.
   * @param {any} vertex
   * @returns {boolean}
   */
  removeVertex(vertex) {
    if (vertex === undefined) {
      throw new Error("value cannot be undefined");
    }
    if (!this.adjacencyList[vertex]) return false;
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
    return true;
  }

  /**
   * Prints the graph's adjacency list, displaying each vertex and its adjacent vertices.
   */
  printGraph() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + this.adjacencyList[vertex]);
    }
  }

  /**
   * Performs a Depth-First Search (DFS) starting from the specified vertex and returns an array of vertices visited in DFS order. Throws an error if the input vertex is undefined.
   * @param {any} start
   * @returns {array}
   */
  dfs(start) {
    if (start === undefined) {
      throw new Error("value cannot be undefined");
    }
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currVertex;
    while (stack.length) {
      currVertex = stack.pop();
      result.push(currVertex);
      this.adjacencyList[currVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  /**
   * Performs a Breadth-First Search (BFS) starting from the specified vertex and returns an array of vertices visited in BFS order. Throws an error if the input vertex is undefined.
   * @param {any} start
   * @returns {array}
   */
  bfs(start) {
    if (start === undefined) {
      throw new Error("value cannot be undefined");
    }
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currVertex;
    while (queue.length) {
      currVertex = queue.shift();
      result.push(currVertex);
      this.adjacencyList[currVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

export default Graph;
