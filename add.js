

var a;


var b;




var frac = function(bunshi, bunbo){
  var bunsu = {
    bunshi : bunshi,
    bunbo : bunbo
  };
  return bunsu;
};

var add = function(a, b){
  var bunshi;
  var bunbo;

  if(Number.isInteger(a) && Number.isInteger(b)){
    return a + b;
  }

  if(Number.isInteger(a)){
    a = frac(a, 1)
  }
  if(Number.isInteger(b)){
    b = frac(b, 1)
  }

  if(a.bunbo != b.bunbo){
     bunshi = a.bunshi * b.bunbo + b.bunshi * a.bunbo;
     bunbo = a.bunbo * b.bunbo ;
  }else{
    bunshi = a.bunshi + b.bunshi
    bunbo = a.bunbo;
       }

  var answer = frac(bunshi, bunbo);
  return answer;
};


a = frac(4, 5);
b = frac(3, 5);
c = frac(3, 7);
d = add(a, b);


console.log(d);