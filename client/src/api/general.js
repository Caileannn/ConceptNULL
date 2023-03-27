import { client } from './client';

export async function getAllByName (name){
    try {
        let entry = await client.getEntries({
            "sys.contentType.sys.id[in]": 'items,articles',
            "limit":1000
        });
        let nameChange= name.toLowerCase();
        var result = entry.items.filter(function(item){
            let res = false
            let keys = Object.keys(item.fields)
            keys.map(function(key){
                if(typeof item.fields[key] === "string" && item.fields[key].toLowerCase().includes(nameChange)){
                    res = true
                }
                if(key === "idArtist" && item.fields[key].fields.name.toLowerCase().includes(nameChange)){
                    res = true
                }
            })
            return res
        });
        return result;
    } catch (e) {
        throw e
    }
}

