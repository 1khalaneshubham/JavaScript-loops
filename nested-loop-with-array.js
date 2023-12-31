let H = [
    ["ironman","spiderman","thor"],
    ["superman","wonder woman","flash"]
]

for(let i = 0; i < H.length; i++){
    console.log(i, H[i], H[i].length);
    for(let j = 0; j<H[i].length; j++){
        console.log('j=${j},${H[i][j]}');
    }
}

let student = [["SK",98],["PK",69],["DK",99]];

for(let i = 0; i<student.length; i++){
    console.log('Info of Student #${i}')
    for(let j = 0; j<student[i].length; j++){
        console.log(student[i][j]);
    }
}