export default {
  currentDate: new Date(),
  arrayDate() {
    return[
      {
        name: "За день",
        value: new Date().setDate(this.currentDate.getDate() - 1)
      },
      {
        name: "За неделю",
        value: new Date().setDate(this.currentDate.getDate() - 7)
      },
      {
        name: "За месяц",
        value: new Date().setMonth(this.currentDate.getMonth() - 1)
      },
      {
        name: "За полгода",
        value: new Date().setMonth(this.currentDate.getMonth() - 7)
      },
      {
        name: "За год",
        value: new Date().setFullYear(this.currentDate.getFullYear() - 1)
      }
    ]
  }
}
