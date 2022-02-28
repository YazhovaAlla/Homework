function f({a:x, b:y, z=1}) {console.log(x,y,z);
    return (x**y)*z ;
}

console.log(f({a: 2, b: 3}));