import { Parallax } from "react-parallax";

const Banner = ({ title, description, imageUrl }) => {
  const imageStyle = {
    backgroundAttachment: "fixed",
  };

  return (
    <div>
      <Parallax
        bgImage={imageUrl}
        strength={-200}
        bgImageStyle={imageStyle}
      >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-primary bg-opacity-10"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5 text-xl">{description}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Banner;
