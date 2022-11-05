export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
    // console.log('url: ', webformatURL);
    return (
        <li className='ImageGalleryItem'>
            <img className="ImageGalleryItem-image" src={webformatURL} alt="" />
        </li>
    )
}