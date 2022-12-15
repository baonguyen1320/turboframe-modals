import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="turbomodal"
export default class extends Controller {
  connect() {
  }

  submitEnd(e) {
    if (e.detail.success) {
      this.hideModal()
    } else {
      console.log('submit false')
    }
  }

  hideModal() {
    this.element.remove()
  }
}
