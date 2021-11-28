import renderHtml from './renderHtml.js'
import { routes } from '../routes/routes.js'

const v_ = (function () {
  const methods = {}

  methods.get = async (name) => {
    const result = await renderHtml(name)
    return result
  }

  const render = async () => {
    let route = routes.find((x) => x.path === location.hash)
    if (!route) {
      route = {
        template: '404'
      }
    }
    document.getElementById('app').innerHTML = await methods.get(route.template)
  }

  methods.redirectTo = (path) => {
    history.pushState(null, null, path)
    render()
  }

  methods.load = () => {
    render()
  }

  return methods
})()

export default v_
