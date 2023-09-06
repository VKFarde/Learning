class HashTable
{
    constructor(size = 5)
    {
        this.keyMap = new Array(size);
    }
    newhash(key)
    {
    var total = 0;
    let pprime = 31;
    for(var i = 0; i<Math.min(key.lenght,100);i++)
    {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total*pprime+value) % this.keyMap.lenght;
    }
    return total;
    }

    set(key , val)
    {
        let indx = this.newhash(key);
        if(!this.keyMap[indx]){
            this.keyMap[indx] = [];
 
        }
        this.keyMap[indx].push([key,val]);
    }
    get(key)
    {
        let indx = this.newhash(key);
        if(this.keyMap[indx])
        {
            //return this.keyMap[indx];
            for(var i = 0; i< this.keyMap[indx].lenght; i++)
            {
                if(this.keyMap[indx][i][0] === key)
                {
                    return this.keyMap[indx][i][1];
                }
            }
2
        }
        else{
            return undefined;
        }
    }
}