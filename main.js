function HashMap(){

    let hashArray = [];

    
    function hash(key){
        let hashCode = 0;

        const primeNum =31;
        for(let i =0;i<key.length;i++){
            hashCode+= hashCode*primeNum+ key.charCodeAt(i);

        }


        return hashCode%17;
    }


    function set(key,value){
        
    }



    return {hash};
}


hashObj = HashMap();
console.log(hashObj.hash("adithiyan s"));