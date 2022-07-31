export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
    this._name = document.querySelector(this._nameSelector)
    this._job = document.querySelector(this._jobSelector)
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
  }
}
