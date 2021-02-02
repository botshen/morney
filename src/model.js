const LocalStorageKeyName = 'recordList'
const model = {
  fetch() {
    return JSON.parse(window.localStorage.getItem(LocalStorageKeyName) || '[]');
  },
  save(data) {
    window.localStorage.setItem(LocalStorageKeyName, JSON.stringify(data));
  }
}
export {model}