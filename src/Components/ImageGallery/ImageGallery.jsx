import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({images}) => {
    return(<ul className="ImageGallery">
        {images.map(({id, previewURL}) => (
            <ImageGalleryItem key={id} webformatURL={previewURL}/>
        ))}
    </ul>)
}