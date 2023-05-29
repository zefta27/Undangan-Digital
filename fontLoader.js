export const fontLoader = (fontFamily, fontUrl) => {
  const newStyle = document.createElement("style");
  newStyle.appendChild(
    document.createTextNode(`
    @font-face {
      font-family: '${fontFamily}';
      src: url('${fontUrl}');
    }
  `)
  );
  document.head.appendChild(newStyle);
};
