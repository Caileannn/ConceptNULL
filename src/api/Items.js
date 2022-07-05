import { client } from './client';

export async function getItems(query) {
    try {
        let entries = await client.getEntries({
            content_type: 'items',
        })
        let result =  entries.items.map(function(entry, index) {
            return{...entry.fields,imageUrl: entry.fields.image.fields.file.url, id: entry.sys.id}
        });
        console.log(result);
        return result;
    } catch (e) {
        throw e
    }
}


export async function getItemsFilters(filter) {
    try {
        let entries = await client.getEntries({
            content_type: 'items',
            ...filter,
            
        })
        let result =  entries.items.map(function(entry, index) {
            return{...entry.fields,imageUrl: entry.fields.image.fields.file.url,id: entry.sys.id}
        });
        console.log(result);
        return result;
    } catch (e) {
        throw e
    }
}

export async function getItem(id) {
    try {
        let entry = await client.getEntry(id);
        let result = {...entry.fields,imageUrl: entry.fields.image.fields.file.url, id: entry.sys.id}
        return result;
    } catch (e) {
        throw e
    }
}


export async function getRandomItems(index) {
    try {
        let entries = await client.getEntries({
            content_type: 'items',
        })
        let result =  entries.items.map(function(entry, index) {
            return{...entry.fields,id: entry.sys.id,imageUrl: entry.fields.image.fields.file.url}
        });
        
        var randomObjects = [];
        for (var i = 0; i < index; i++) {
            var randomIndex = Math.floor(Math.random() * result.length);
            while(randomObjects.includes(randomIndex)){
            randomIndex = Math.floor(Math.random() * result.length);
            }
            randomObjects.push(randomIndex);
        }

        return randomObjects.map(function(index){
            return result[index]
        })
    } catch (e) {
        throw e
    }
}