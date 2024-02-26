import lake1 from "../image/lake1.JPG";
import lake2 from "../image/lake2.JPG";
import lake3 from "../image/lake3.JPG";
import lake4 from "../image/lake4.JPG";

const imageData = [
  { id: 1, img: lake1 },
  { id: 2, img: lake2 },
  { id: 3, img: lake3 },
  { id: 4, img: lake4 }
];

export default function ImageGallery() {
  return (
    <div>
      {imageData.map(image => (
        <div key={image.id} className="column">
          <img src={image.img} alt="" />
        </div>
      ))}
    </div>
  );
}
