export default class UserInfo{
    constructor({ name, about}){
   this._nameSeltctor = name;
   this._aboutSelector = about;
    }
    getUserInfo(){
    this._UserInfo.name = this._name.textContent;
    this._UserInfo.about = this._about.textContent;
    return this.getUserInfo;
    }
    setUserInfo(){
        this._name.textContent = data.name;
        this._about.textContent = data.about;

    }
}