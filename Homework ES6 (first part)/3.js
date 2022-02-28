function f(args, z = 1) {
    return (args.a * z) ** args.b;
}

console.log(f({a: 2, b: 3}, 10));