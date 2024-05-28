const Bot = () => {
  return (
    <>
      <script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@1.3.1/build/spline-viewer.js"
      ></script>
      <div className="2xl:h-[100vh]">
        <spline-viewer url="https://prod.spline.design/lf9CAYzz-oA0es6E/scene.splinecode"></spline-viewer>
      </div>
    </>
  );
};

export default Bot;
