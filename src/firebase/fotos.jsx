import { storage } from "./config";
import { ref, listAll, getDownloadURL } from 'firebase/storage'

export const getAll = async () => {
     
    const list = [];

    const imgFolder = ref(storage, "images");
    const fotoList = await listAll(imgFolder);


    for(let i of fotoList.items) {
        let fotoUrl = await getDownloadURL(i);

        list.push({
            name: i.name,
            url: fotoUrl
        })
    }

    

    return list;
}