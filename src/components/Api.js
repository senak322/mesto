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

  editInfo(values) {
    return fetch(`${this._url}/v1/cohort-50/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values.name,
        about: values.job
      })
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

  addCard(values) {
    return fetch(`${this._url}/v1/cohort-50/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: values.place,
        link: values.link
      })
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

  deleteCard(cardId) {
    return fetch(`${this._url}/v1/cohort-50/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
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

  likeCard(cardId) {
    return fetch(`${this._url}/v1/cohort-50/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
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

  unLikeCard(cardId) {
    return fetch(`${this._url}/v1/cohort-50/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
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

  setAvatar(url) {
    return fetch(`${this._url}/v1/cohort-50/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: url.link
      })

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

}


