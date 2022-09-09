export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token
  }

  getImages() {
    return fetch(`${this._url}/v1/cohort-50/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then((res) =>{
      if (res.ok) {
        return res.json()
      }
      else {
        return new Error('Ошибка')
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getProfileInfo() {
    return fetch(`${this._url}/v1/cohort-50/users/me`, {
    headers: {
      authorization: this._token
    }
  })
    .then(res => {
      if (res.ok){
        return res.json()
      } else {
        return new Error('Ошибка')
      }
    })

    .catch((err) => {
      console.log(err);
    })
  }
}

