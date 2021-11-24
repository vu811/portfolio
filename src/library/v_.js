import renderHtml from './renderHtml.js'

const v_ = (function () {
  const methods = {}

  methods.get = async (name) => {
    const result = await renderHtml(name)
    return result
  }

  return methods
})()

export default v_
