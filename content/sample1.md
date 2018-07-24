---
title: Next.jsでブログを作った話
date: 20180721
category: Next.js
author: Tatsuhiko Seki
---

# Next.jsでブログを作った話

このブログのことなんですが ...etc

```
/**
 * downloadZip
 * Zipファイルをダウンロードする
 */
function downloadZip () {
  return new Promise(async (resolve, reject) => {
    try {
      const zip = await dbx.filesDownloadZip({path: '/posts'});
      fs.writeFile('./output/posts.zip', zip.fileBinary, 'binary', function (err) {
        if (err) { throw err;}
      })
      resolve(".zip successfully downloaded")
    } catch (err) {
      console.log(err);
    }
  })
}

/**
 * isExistZip
 * Zipファイルが存在するかを返す
 * 
 */
function isExistFile (file) {
  try {
    // zip が存在したらtrueを返す
    return !!fs.statSync(file);
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false;      
    }
  }
}

// zip が存在しなかったらダウンロードして ./tmp に展開
if (!isExistFile()) {
  downloadZip()
  .then((res) => {
    console.log(res);
    fs.createReadStream('./output/posts.zip')
      .pipe(unzip.Extract({ path: './tmp/' }));
  })
}
```
