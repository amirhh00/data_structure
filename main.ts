class DoMaths {
  constructor(num1: number, num2?: number) {
    num1 ? document.querySelector("#Fibonacci").innerHTML = this.fib(num1).toString() : null;
    num1 ? document.querySelector("#factorial").innerHTML = this.fact(num1).toString() : null;
    num2 && num1 ? document.querySelector("#multiply").innerHTML = this.mult(num1, num2).toString() : null;
    num2 && num1 ? document.querySelector("#division").innerHTML = this.div(num1, num2).toString() : null;
    num2 && num1 ? document.querySelector("#gcd").innerHTML = this.gcd(num1, num2).toString() : null;
  }

  fib(n: number): number {
    if (n <= 2) {
      return 1;
    } else if (n > 2) {
      return this.fib(n - 1) + this.fib(n - 2);
    }
  }

  fact(n: number): number {
    if (n === 0) {
      return 1;
    } else if (n > 0) {
      return n * this.fact(n - 1)
    }
  }

  mult(n: number, m: number): number {
    if (n === 0 || m === 0) {
      return 0;
    } else if (n > 0 && m > 0) {
      return n + this.mult(m - 1, n)
    }
  }

  div(n: number, m: number): number {
    if (n >= m) {
      return 1 + this.div(n - m, m);
    } else if (n < m) {
      return 0;
    }
  }

  gcd(n: number, m: number): number {
    if (m === 0) {
      return n;
    } else if (m > n) {
      return this.gcd(m, n);
    } else if (m > 0) {
      return this.gcd(m, n % m);
    }
  }
}

class reverse {
  ch: string = "";
  
  constructor(text: string) {
    this._doReverse(text);
  }

  _doReverse(text: string) {
    if (text.length === 1) {
      this.ch += text;
      document.querySelector("#label").innerHTML = this.ch;
    } else {
      setTimeout(() => {
        this.ch += text.substr(text.length - 1);
        this._doReverse(text.slice(0, -1));
      }, 120);
    }
  }
}

function callReverse(e: string) {
  if (e) {
    new reverse(e);
  } else {
    document.querySelector("#label").innerHTML = "waiting for input..";
  }
}

function callForNum1(e: string) {
  const num2 = (<HTMLInputElement>document.getElementById("num2")).value;
  new DoMaths(parseInt(e), num2 && isFinite(parseInt(num2)) ? parseInt(num2) : null);
}

function callForNum2(e: string) {
  const num1 = (<HTMLInputElement>document.getElementById("num1")).value;
  num1 && isFinite(parseInt(num1)) ? new DoMaths(parseInt(num1), parseInt(e)) : null;
}