class Image {
  constructor(fileName) {
    this._name = fileName;
  }
  show() {
    console.log(`name=${this._name}`);
  }
}

class JpegImage extends Image {
  show() {
    console.log(`name=${this._name}, format=JPEG`);
  }
}

class GifImage extends Image {
  show() {
    console.log(`name=${this._name}, format=GIF`);
  }
}

class PngImage extends Image {
  show() {
    console.log(`name=${this._name}, format=PNG`);
  }
}

/**
 * image factory
 * @param {string} name
 */
function createImage(name) {
  if (name.match(/\.jpeg$/)) {
    return new JpegImage(name);
  } else if (name.match(/\.gif$/)) {
    return new GifImage(name);
  } else if (name.match(/\.png$/)) {
    return new PngImage(name);
  } else {
    throw new Error("Unsupported format");
  }
}

try {
  const jpeg = createImage("photo.jpeg");
  jpeg.show();
  const unknown = createImage("hogefuga.gz");
  unknown.show();
} catch (e) {
  console.log(e);
}
