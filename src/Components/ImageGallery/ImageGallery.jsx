import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({ images }) => {
    return (<ul className="ImageGallery">
        {images.map(({ id, previewURL, largeImageURL }) => (
            <ImageGalleryItem key={id} webformatURL={previewURL} largeImageURL={largeImageURL} />
        ))}
    </ul>)
}