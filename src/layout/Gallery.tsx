import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import { Photos } from "@/data/Photos";

export default function Gallery() {
  return (
    <>
      <section className=" py-20 bg-gradient-to-t from-background to-[rgb(250,250,250)] dark:to-[rgb(12,12,12)]">
        <div className="container max-w-3xl mx-auto sm:px-2 px-5">
          <h1 className=" text-center mb-20 text-xs text-muted-foreground/40 tracking-widest">
            GALLERY
          </h1>
          <MasonryPhotoAlbum columns={3} spacing={15} photos={Photos} />
        </div>
      </section>
    </>
  );
}
