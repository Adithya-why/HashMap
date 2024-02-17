function HashMap(){

    let hashArray = [];

    //generates a hash code for a given string key
    function hash(key){
        let hashCode = 0;

        const primeNum =31;
        for(let i =0;i<key.length;i++){
            hashCode+= hashCode*primeNum+ key.charCodeAt(i);

        }


        return hashCode%17;
    }

    //insert new element
    function set(key,value){
        //generate hash
        code = hash(key);
        console.log(code);
        

        //if bucket doesnt exist create bukcet list at location code
        //and insert the key value
        if(!hashArray[code]){
            hashArray[code] = [[key,value]];
            console.log(hashArray);
            return
        }

        else{
            let bucket = hashArray[code]
            console.log(bucket);
            found = false;

            //if bucket exists and the same key entry isfound
            //then value isupdated
            for(let i =0;i<bucket.length;i++){
                if(bucket[i][0]===key){
                    found = true
                    bucket[i][1]=value;
                    console.log("heheh")
                    console.log(hashArray);
                    return
                }
            }

            //if bucket exists but key doesnt, the insert the new key value into bucket

            if(!found){
                bucket.push([key.value])
                return
            }


        }
        
    }


    function get(key){
        code = hash(key);
        res = null;

        bucket = hashArray[code]
        for(let i = 0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                res = bucket[i][1];
            }
        }
        console.log(res);
        return res;

    }



    return {hash,set,get};
}


hashObj = HashMap();

hashObj.set("adi","s");
hashObj.set("adi","a");
hashObj.set("sfjk","LL")
hashObj.get("adi")