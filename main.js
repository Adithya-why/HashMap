function HashMap(){
    //store the buckets at the index of the hash code of the key
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

    //gets a key
    function get(key){
        code = hash(key);
        res = null;
        //finds the bucket
        bucket = hashArray[code];
        if(bucket){
        for(let i = 0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                res = bucket[i][1];
            }
        }
    }
        console.log(res);
        return res;

    }


    function has(key){
        res = get(key);
        if(!res){
            return false
        }

        else{
            return true
        }
    }

    function remove(key){

        res = get(key);
        if(!res){
            console.log("DIDIDINOT REMOVE");

            return false
        }


        code = hash(key);
        res = null;
        //finds the bucket
        bucket = hashArray[code];
        if(bucket){
        for(let i = 0;i<bucket.length;i++){
            if(bucket[i][0]===key){
                bucket.splice(i,1);
                console.log(hashArray);
                return true;

            }
        }
    }


        
    }


    return {hash,set,get,has,remove};
}


hashObj = HashMap();

hashObj.set("adi","s");
hashObj.set("adi","a");
hashObj.set("sfjk","LL")
hashObj.get("sfjk");
console.log(hashObj.has("sfjksdf"))
hashObj.remove("sfjkjbjh");