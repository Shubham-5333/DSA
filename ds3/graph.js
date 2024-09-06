class Graph {
    constructor() {
        this.adjList = {}
    }
    addVertex(vertex){
        if(!this.addVertex[vertex]) this.adjList[vertex] = []
    }
    addEdge(v1,v2){
        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }
    removeEdge(v1,v2){
        this.adjList[v1]=this.adjList[v1].filter(v=>v!==v2)
        this.adjList[v2]=this.adjList[v2].filter(v=>v!==v1)
    }
    removeVertex(vertex){
        while(this.adjList[vertex].length){
             const adj = this.adjList[vertex].pop()
             this.removeEdge(vertex,adj)
        }
        delete this.adjList[vertex]
    }
}

let g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")

console.log(g.addEdge("A","C"));

console.log(g.adjList);
g.removeVertex("A","C")

console.log(g.adjList);