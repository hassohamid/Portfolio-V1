import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { Photos } from "@/data/Photos";

export default function Gallery() {
  return (
    <>
      <h1 className=" text-center py-20 text-sm text-muted-foreground/50 tracking-widest">
        GALLERY
      </h1>

      <MasonryPhotoAlbum columns={3} spacing={15} photos={Photos} />
    </>
  );
}
