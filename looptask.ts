// square hollow pattern
/* const num:number = 5;
for (let i = 0; i<num; i++) {
    let row = "";
    for (let j = 0; j<num; j++) {
        if (i === 0 || i === num - 1 || j === 0 || j === num - 1) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
} */

//number triangular
/* const n=5;
for(let i=0;i<n;i++){
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += i + " ";
    }

    console.log(row);
} */

    //number increasing pyramid
    /* const n=4;
    for(let i=1;i<=n;i++)
    {
        let row = " ";
        for (let j=1;j<=i;j++){
            row+=j + " ";
        }
        console.log(row);
    } */

        //number increasing reverse pyramid
/* const n = 4;
for (let i = n; i >= 1; i--) {
let row = "";
for (let j = 1; j <= i; j++) {
row += j + " ";
    }
    console.log(row);
} */

    //number changing pyramid
  /*   const n =4;
    let num=1;
    for (let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=i;j++){
            row+=num + " ";
            num++;
        }console.log(row);
    }
 */
    //zero one triangle
  /*   const n=4;
    for(let i=1;i<=n;i++){
       let row="";
        for(let j=1;j<=i;j++){
if ((i + j) % 2 === 0) {
            row += "1 ";
        } else {
            row += "0 ";
        }}
console.log(row);

    } */

//palindrome triangular
/* const n=4;
    for(let i=1;i<=n;i++){
       let row="";
        for(let j=i;j>=1;j--){
            row+=j + "";
        }
         for (let j = 2; j <= i; j++) {
        row += j + " ";
    }

    console.log(row);
} */

    //rhombus pattern
    /* const n=4;
     for(let i=1;i<=n;i++){
       let row= " ";
        for(let num=1;num<=n-i;num++){
            row+= " *";
         }for (let j = 1; j <= n; j++) {
        row += " * ";
        }console.log(row);} */

        //diamond pattern
/* const n = 4;
for (let i = 1; i <= n; i++) {
    let row = "";
for (let space = 1; space <= n - i; space++) {
        row += " ";
    }for (let j = 1; j <= i; j++) {
        row += "* ";
}
    console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let num = 1; num<= n - i;num++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
} */

    //butterfly star pattern
    
/* const n = 4;
for (let i = 1; i <= n; i++) {
    let row = "";
 for (let j = 1; j <= i; j++) {
      row += "* ";
    }
for (let num = 1; num <= 2 * (n - i); num++) {
    row += "  ";
    }
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }for (let num= 1;num<= 2 * (n - i); num++) {
        row += "  ";
    }for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
} */

    //square fill pattern
   /*  const n = 6;
for (let i = 1; i <= n; i++) {
    let row = "";
 for (let j = 1; j <= n; j++) {
      row += "* ";
    }    console.log(row);} */

    //right half pyramid
   /*   const n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
 for (let j = 1; j <= i; j++) {
      row += " * ";
    }    console.log(row);}  */

    //reverse right half pyramid
   /*  const n = 5;
for (let i = n; i >= 1; i--) {
    let row = "";
 for (let j = 1; j <= i; j++) {
      row += " * ";
    }    console.log(row);} */

    //left half pyramid
   /*  const n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
     for (let num= 1;num<= n - i;num++) {
        row += "  ";}
 for (let j = 1; j <= i; j++) {
      row += " * ";
    }    console.log(row);}  */

    //reverse left half pyramid
/* const n = 5;
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let num= 1; num <= n - i;num++) {
        row += "  ";}
 for (let j = 1; j <= i; j++) {
      row += " * ";
    }    console.log(row);} */

    //k pattern
/* const n = 4;
for (let i = n; i >= 1; i--) {
    let row = "";
for (let j = 1; j <= i; j++) {
        row += "* ";}
console.log(row);
}
for (let i = 2; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }    console.log(row);
} */

    //triangle star pateern
  /*   const n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let num= 1; num <= n - i; num++) {
        row += " ";}
for (let j = 1; j <= i; j++) {
        row += "* ";}
console.log(row);
} */

//reverse number triangle pattern
/* const n = 4;
for (let i = 1; i <= n; i++) {
    let row = "";
for (let j = i; j <= n; j++) {
        row +=j+ " ";}
console.log(row);
}  */

//mirror image triangle pattern
/* const n = 4;
for (let i = 1; i <= n; i++) {
    let row = "";
    for (let num = 1; num < i; num++) {
        row += "  ";
    }
    for (let j = i; j <= n; j++) {
        row += j + " ";}
    console.log(row);}
for (let i = 1; i >= n; i++) {
    let row = "";
 for (let num = 1; num > i; num++) {
        row += "  "; }
for (let j = i; j >= i; j++) {
        row += j + " ";
    }console.log(row);} */

    //hollow triangle pattern
   /*  const n = 5;
for (let i = 1; i <= n; i++) {
    let row = "";
 for (let num = 1; num<= n - i;num++) {
        row += " ";
    }
for (let j = 1; j <= 2 * i - 1; j++) {
        if (j === 1 || j === 2 * i - 1 || i === n) {
            row += "*";
        } else {
            row += " "; }
    }
console.log(row);
} */

//hollow reverse triangle pattern
/* const n = 5;
for (let i = n; i >= 1; i--) {
    let row = "";
for (let num= 1; num<= n - i;num++) {
        row += " ";
}
for (let j = 1; j <= 2 * i - 1; j++) {
if (j === 1 || j === 2 * i - 1 || i === n) {
    row += "*";
    } else {
    row += " ";
 }    }
  console.log(row);
} */

  //hollow diamond pattern
/* const n = 4;
for (let i = 1; i <= n; i++) {
let row = "";
for (let space = 1; space <= n - i; space++) {
        row += " ";
    }
for (let j = 1; j <= 2 * i - 1; j++) {
 if (j === 1 || j === 2 * i - 1) {
row += "*";
        } else {
            row += " ";
        }
    }
console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
    let row = "";
for (let num = 1; num <= n - i; num++) {
row += " ";
    }
for (let j = 1; j <= 2 * i - 1; j++) {
    if (j === 1 || j === 2 * i - 1) {
         row += " *";
        } else {
        row += " ";
    }
    }
    console.log(row);
} */

    // hollow hour glass pattern
  /* const n = 5;
for (let i = n; i >= 1; i--) {
    let row = "";
    for (let num = 0; num < n - i; num++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === n) {
            row += "* ";
        } else {
            row += "  ";
        }
    } console.log(row);
}
for (let i = 2; i <= n; i++) {
    let row = "";
for (let space = 0; space < n - i; space++) {
        row += " ";
    }
    for (let j = 1; j <= i; j++) {
        if (j === 1 || j === i || i === n) {
            row += "* ";
        } else {
            row += "  ";
        }
    }console.log(row);
} */

    //pascal triangle
   /*  const n = 4;
    for (let i = 0; i < n; i++) {
    let row = "";
    let num = 1;
for (let j = 0; j <= i; j++) {
        row += num + " ";
num = num * (i - j) / (j + 1);
    }console.log(row);
} */

    //right triangle pascal
const n = 4;
for (let i = 1; i <= n; i++) {
    let row = "";
for (let j = 1; j <= i; j++) {
        row += "* ";
}
console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
let row = "";
for (let j = 1; j <= i; j++) {
row += "* ";
}
console.log(row);}