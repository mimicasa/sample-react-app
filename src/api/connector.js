class Connector {
  async request(url, method, data) {
    const headers = new Headers({
      'content-type': 'application/json',
    })
    const options = {
      method: method || 'GET',
      headers,
    }

    const resp = await fetch(url, options)
    if (resp.status === 204) return null

    const json = await resp.json()    
    return json
  }
}

export default new Connector()