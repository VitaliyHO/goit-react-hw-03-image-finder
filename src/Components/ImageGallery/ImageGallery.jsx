import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({images}) => {
    // console.log('images', images[0].id);
    return(<ul className="ImageGallery">
        {images.map(({id, previewURL}) => (
            <ImageGalleryItem key={id} webformatURL={previewURL}/>
        ))}
    </ul>)
}