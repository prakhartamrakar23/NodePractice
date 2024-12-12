import d from './Ecma1.mjs';
d();

import {f1} from './Ecma1.mjs'
f1();

import {next as wish} from './Ecma1.mjs'
wish();

//if we want to use require then we have to make require first

import {createRequire} from "module";
const require=createRequire(import.meta.url)

const a=require("fs")
const f=a.readFileSync('p.txt','utf-8',(data,err)=>{
    console.log(data);
});
console.log(f);

