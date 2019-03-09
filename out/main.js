var DoMaths = /** @class */ (function () {
    function DoMaths(num1, num2) {
        num1 ? document.querySelector("#Fibonacci").innerHTML = this.fib(num1).toString() : null;
        num1 ? document.querySelector("#factorial").innerHTML = this.fact(num1).toString() : null;
        num2 && num1 ? document.querySelector("#multiply").innerHTML = this.mult(num1, num2).toString() : null;
        num2 && num1 ? document.querySelector("#division").innerHTML = this.div(num1, num2).toString() : null;
        num2 && num1 ? document.querySelector("#gcd").innerHTML = this.gcd(num1, num2).toString() : null;
    }
    DoMaths.prototype.fib = function (n) {
        if (n <= 2) {
            return 1;
        }
        else if (n > 2) {
            return this.fib(n - 1) + this.fib(n - 2);
        }
    };
    DoMaths.prototype.fact = function (n) {
        if (n === 0) {
            return 1;
        }
        else if (n > 0) {
            return n * this.fact(n - 1);
        }
    };
    DoMaths.prototype.mult = function (n, m) {
        if (n === 0 || m === 0) {
            return 0;
        }
        else if (n > 0 && m > 0) {
            return n + this.mult(m - 1, n);
        }
    };
    DoMaths.prototype.div = function (n, m) {
        if (n >= m) {
            return 1 + this.div(n - m, m);
        }
        else if (n < m) {
            return 0;
        }
    };
    DoMaths.prototype.gcd = function (n, m) {
        if (m === 0) {
            return n;
        }
        else if (m > n) {
            return this.gcd(m, n);
        }
        else if (m > 0) {
            return this.gcd(m, n % m);
        }
    };
    return DoMaths;
}());
var reverse = /** @class */ (function () {
    function reverse(text) {
        this.ch = "";
        this._doReverse(text);
    }
    reverse.prototype._doReverse = function (text) {
        var _this = this;
        if (text.length === 1) {
            this.ch += text;
            document.querySelector("#label").innerHTML = this.ch;
        }
        else {
            setTimeout(function () {
                _this.ch += text.substr(text.length - 1);
                _this._doReverse(text.slice(0, -1));
            }, 120);
        }
    };
    return reverse;
}());
function callReverse(e) {
    if (e) {
        new reverse(e);
    }
    else {
        document.querySelector("#label").innerHTML = "waiting for input..";
    }
}
function callForNum1(e) {
    var num2 = document.getElementById("num2").value;
    new DoMaths(parseInt(e), num2 && isFinite(parseInt(num2)) ? parseInt(num2) : null);
}
function callForNum2(e) {
    var num1 = document.getElementById("num1").value;
    num1 && isFinite(parseInt(num1)) ? new DoMaths(parseInt(num1), parseInt(e)) : null;
}
//# sourceMappingURL=main.js.map