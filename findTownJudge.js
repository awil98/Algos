/*
In a town, there are n people labelled from 1 to n.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

 

Example 1:

Input: n = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: n = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
Example 4:

Input: n = 3, trust = [[1,2],[2,3]]
Output: -1
Example 5:

Input: n = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
*/

var findJudge = function(n, trust) {
    let adjacencyList = {}
    let inDegree = {}
    let outDegree = {}
    
    for(let i = 1; i <= n; i++){
        adjacencyList[i] = []
        inDegree[i] = 0
        outDegree[i] = 0
    }
    
    for(let i = 0; i < trust.length; i++){
        adjacencyList[trust[i][0]].push(trust[i][1])
        outDegree[trust[i][0]] += 1
        inDegree[trust[i][1]] += 1
    }
    
    let keys = Object.keys(adjacencyList)
    for(let i = 0; i < keys.length; i++){
        if(outDegree[keys[i]] === 0 && inDegree[keys[i]] === n - 1){
           return keys[i]
        }
    }
   
    return -1
};
