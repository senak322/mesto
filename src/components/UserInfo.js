export default class UserInfo {
  constructor({ nameSelector, jobSelector, imgSelector }) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
    this._imgSelector = imgSelector
    this._name = document.querySelector(this._nameSelector)
    this._job = document.querySelector(this._jobSelector)
    this._avatar = document.querySelector(this._imgSelector)
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      job: this._job.textContent
    };
    return userInfo
  }

  setUserInfo(newInfo) {
    this._name.textContent = newInfo.name;
    this._job.textContent = newInfo.job;
    this._avatar.src = newInfo.avatar
  }
}
