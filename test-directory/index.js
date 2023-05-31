import fs from 'fs'
const x = fs.readdirSync('../lib/regular')
let font = ''
let js = ''
for (const i of x) {
    font += `
    @font-face {
    font-family: '${i.split('.')[0]}';
    font-style: normal;
    font-weight: 400;
    src: url('./lib/regular/${i}');
    src: url('./lib/regular/${i}') format('otf'), url('./lib/regular/${i}') format('opentype');
}
    `

    js += `export const ${i.split('.')[0]} = "${i.split('.')[0]}"
    `
}
fs.writeFile('regular.css', font, { flag: 'w+' }, function (err) {
    console.log(err)
})

fs.writeFile('regular.js', js, { flag: 'w+' }, function (err) {
    console.log(err)
})