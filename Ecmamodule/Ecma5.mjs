class Ecma{

    m1(){
        console.log("m1 executed two time");
        
    }
    m2(){
        console.log("m2 executed one time");
        
    }
}
// export default new Ecma();

//named export by giving name of obj
export let obj= new Ecma;
