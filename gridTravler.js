function gridTravler(m,n){
  if(m === 1 && n === 1) return 1
  if(m === 0 || n === 0) return 0

  return gridTravler(m-1, n) + gridTravler(m, n-1)
}

console.log(gridTravler(2,3))
