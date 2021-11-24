import { templateFolder } from '../constants/index.js'

const renderHtml = async (name) => {
  const result = await fetch(`${templateFolder}/${name}.html`)
  const content = await result.text()
  return content
}

export default renderHtml
