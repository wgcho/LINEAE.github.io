/**
 * LocalStorage Checkbox
 */
class LSCheckbox {
    constructor(checkbox, keyName, defaultValue) {
        this.checkbox = checkbox
        this.keyName = keyName;
        this.defaultValue = defaultValue;

        this.load()
    }

    load() {
        if( null == window.localStorage.getItem(this.keyName) ) {
            this.checkbox.checked = this.defaultValue;
        } else {
            this.checkbox.checked = window.localStorage.getItem(this.keyName) == "true";
        }
    }

    save() {
        window.localStorage.setItem(this.keyName, this.checkbox.checked);
    }

    checked() {
        return window.localStorage.getItem(this.keyName) == "true"
    }
}