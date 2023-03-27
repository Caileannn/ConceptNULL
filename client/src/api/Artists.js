import { client } from './client';

export async function getArtists(query) {
    try {
        let entries = await client.getEntries({
            content_type: 'artist',
        })
        let result = {}
        entries.items.map(function(entry, index) {

            let collections = {}
            entry.fields.collections.map((collection,index) => {
                collections[collection.toLowerCase()] = {
                    label: collection,
                    index: index,
                }
            })

            result[entry.sys.id] = {
                label: entry.fields.name,
                nodes: collections,
                index: index
            }
        });
        return result;
    } catch (e) {
        console.log(e);
    }
}
