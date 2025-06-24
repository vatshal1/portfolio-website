const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;
  return (
    <div
      className="absolute"
      style={{
        top: top.toString(),
        left: left.toString(),
        width: width.toString(),
        height: height.toString(),
        transform: "translate(-50%,-50%)",
      }}
    >
      <div className="w-full h-full bg-purple-500/40 rounded-full  blur-3xl animate-blob"></div>
    </div>
  );
};

export default BlurBlob;
