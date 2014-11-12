
var a;

var b;



var frac = function(bunshi, bunbo){
  var bunsu = {
    bunshi : bunshi,
    bunbo : bunbo
  };
  return bunsu;
};



var multiply = function(a, b){
  var bunshi;
  var bunbo;

  if(Number.isInteger(a) && Number.isInteger(b)){
    return a * b;
  };


  if(a == 0){
    return 0 ;
  };
  if(b == 0){
    return 0 ;
  }

  if(Number.isInteger(a)){
    a = frac(a, 1)
  }
  if(Number.isInteger(b)){
    b = frac(b, 1)
  }


    bunshi = a.bunshi * b.bunshi;
    bunbo = a.bunbo * b.bunbo;


  var answer = frac(bunshi, bunbo);
  return answer;
};

a = frac(4, 5);
b = frac(3, 5);
c = frac(3, 7);
d = multiply(1,  2);

console.log(d)
