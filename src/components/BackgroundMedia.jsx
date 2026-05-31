import React from "react";

const BackgroundMedia = ({ src }) => {
  if (!src) return null;
  const isVideo = src.endsWith(".mp4");
  const commonStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1
  };

  return isVideo ? (
    <video autoPlay loop muted playsInline style={commonStyle}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img src={src} alt="Background" style={commonStyle} />
  );
};

export default BackgroundMedia;
