import { useEffect, useState } from "react";
import { randomGenerator } from "../../utils/randomGenerator";

const Content = ({ data }) => {
  const [launch] = useState(data[randomGenerator(0, data.length - 1)]);

  const [image, setImage] = useState({
    index: null,
    src: "",
  });

  useEffect(() => {
    const { original } = launch.links.flickr;
    const index = randomGenerator(0, original.length - 1);

    setImage({
      index,
      src: original[index],
    });
  }, [launch]);

  const handleNextImageClick = () => {
    const { original } = launch.links.flickr;

    if (image.index + 1 === original.length) {
      setImage({
        index: 0,
        src: original[0],
      });
    } else {
      setImage({
        index: image.index + 1,
        src: original[image.index + 1],
      });
    }
  };

  const handleRandomSelectionClick = () => {
    const { original } = launch.links.flickr;
    let newIndex = image.index;

    // Avoid repeated images.
    while (newIndex === image.index) {
      console.log('render')
      newIndex = randomGenerator(0, original.length - 1);
    }

    setImage({
      index: newIndex,
      src: original[newIndex],
    });
  };

  return (
    <div className="flex flex-col bg-slate-100 rounded-xl p-6 lg:p-10 dark:bg-slate-800 w-full lg:w-[500px] shadow-lg shadow-black-500/50">
      <div className="rounded-xl overflow-hidden">
        <img className="h-full object-cover" src={image.src} alt="" />
      </div>
      <div className="flex justify-around items-center py-[20px]">
        <div className="flex-1 mr-[4px]">
          <button
            className="w-full py-2 bg-indigo-400 rounded-full text-white"
            onClick={handleRandomSelectionClick}
          >
            Random picture
          </button>
        </div>
        <div className="flex-1 ml-[4px]">
          <button
            className="w-full py-2 bg-emerald-400 rounded-full text-white"
            onClick={handleNextImageClick}
          >
            Next image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
