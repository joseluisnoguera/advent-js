export default function fixFiles(files) {
  return files.reduce((newFiles, file) => {
    if (!newFiles.includes(file))
      newFiles.push(file)
    else {
      let i = 1, newFileName = `${file}(${i})`
      while(newFiles.includes(newFileName)){
        i++
        newFileName = `${file}(${i})`
      }
      newFiles.push(newFileName)
    }
    return newFiles
  } , [])
}