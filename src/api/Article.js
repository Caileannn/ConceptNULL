import { client } from './client';

export async function getArticles() {
    try {
        let entries = await client.getEntries({
            content_type: 'articles',
        })
        let result =  entries.items.map(function(entry, index) {
            return{...entry.fields,imageUrl: entry.fields.images,id: entry.sys.id}
        });
        return result;
    } catch (e) {
        throw e
    }
}

export async function getArticle(id) {
    try {
        let entry = await client.getEntry(id);
        let result = {...entry.fields,imagesUrls: [entry.fields.images[0].fields.file.url,entry.fields.images[1].fields.file.url], id: entry.sys.id,artistImage:entry.fields.artistImage.fields.file.url}
        return result;
    } catch (e) {
        throw e
    }
}


export async function getRandomArticles(index) {
    try {
        let entries = await client.getEntries({
            content_type: 'articles',
        })
        let result =  entries.items.map(function(entry, index) {
            return{...entry.fields,id: entry.sys.id,imagesUrl: entry.fields.images[0].fields.file.url}
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