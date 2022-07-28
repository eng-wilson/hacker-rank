function getPattern(x, y, z, w) {
  let xPattern = '';
  let oPattern = '';
  let linePattern = '';
  let mirrorPattern = '';
  let groupPattern = '';

  for (let i = 0; i < x; i++) {
    xPattern += 'x';
    oPattern += 'o';
  }

  for (let i = 0; i < y; i++) {
    if (i % 2 === 0) {
      linePattern += xPattern;
      mirrorPattern += oPattern;
    } else {
      linePattern += oPattern;
      mirrorPattern += xPattern;
    }
  }

  for (let i = 0; i < z; i++) {
    if (i % 2 === 0) {
      groupPattern += `${linePattern}`;
    } else {
      groupPattern += `${mirrorPattern}`;
    }
    if (i < z - 1) {
      groupPattern += '\n';
    }
  }

  for (let i = 0; i < w; i++) {
    console.log(groupPattern);
  }
}

getPattern(3, 4, 2, 3);
