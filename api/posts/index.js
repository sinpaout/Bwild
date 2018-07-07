import fs from 'fs'

export async function getPosts (dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (error, files) => {
      if (error) {
        reject(error);
      } else {
        files.reverse()
        resolve({
          pathList: files.map( el => dirname + el ),
          nameList: files.map( el => el.slice(4, -3) )
        })
      }
    })
  })
}