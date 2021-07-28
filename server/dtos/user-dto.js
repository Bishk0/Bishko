module.exports = class UserDto {
  email
  id
  isActivated

  constructor(model) {
    this.fullName = model.fullName
    this.email = model.email
    this.id = model._id
    this.isActivated = model.isActivated
  }
}
