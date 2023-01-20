import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/config';

export default function ImgUp () {
    const [imgURL, setImgURL] = useState ("")
    const [progress, setProgress] = useState ("")
        
    const handleUpload = (event) => {
        event.preventDefault();
        const file = event.target[0]?.files[0]
        if(!file) return;

      //referência do storage  e a pasta images/nome do arquivo
    const storageRef = ref(storage, `images/${file.name}`)
  
    const uploadTask = uploadBytesResumable(storageRef, file)
  
    //função da Barra de progresso do upload 
    uploadTask.on(
        "state_changed",
        snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(progress)
        },
        error => {
            alert(error)
        },
        //carrega o URL da imagem e o setImgURL recebe os valores que vão parar url
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
            .then(url => {
                setImgURL(url)
            })
        }
    )
}

//Form para Upload das imagens, onSubmit recebe o handelUpload que está esperando ser adicionado um arquivo, o input que vai mostrar o arquivo que vai ser carregado e o botão para enviar os arquivos.

    return (
    <div className='ImgUp'>
        <form onSubmit={handleUpload}>
            <input type="file" />
            <button type='submit'>Enviar</button>
        </form>
               
        {!imgURL && <progress value={progress} max="100"  />}  
        {imgURL && <img src={imgURL} alt="imagem" height={300} />}
        {imgURL.map && <img src={imgURL} alt="{imgList.items.name}" key={imgURL} />}
                        
    </div>
  );
}

//Mostra a barra de progresso
//{!imgURL && <progress value={progress} max="100"  />}  
//Exibe a imagem que foi carregada
//{imgURL && <img src={imgURL} alt="imagem" height={300} />}