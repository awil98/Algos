/*
A salesman has a bag that can only hold a limited amount weight w.
The salesman has n products to choose from each of which has a profit
and a weight associated with it. Write a program that determines what 
items the salesman should choose that would give him the max profit.
*/

function getMin(p, w, weight, item){
  if(weight === 0 || item < 0){
    return 0
  }
  if(weight - w[item] < 0){
    return getMin(p, w, weight, item-1)
  }

  return Math.max(getMin(p,w,weight, item-1), p[item] + getMin(p,w, weight-w[item], item-1))
}
