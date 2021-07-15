const topPanel = {
    info(text = "Some text here", autoclose = true) {
      this.showPanel(text, "info", autoclose);
    },
    success(text = "Some text here", autoclose = true) {
      this.showPanel(text, "success", autoclose);
    },
    danger(text = "Some text here", autoclose = false) {
      this.showPanel(text, "danger", autoclose);
    },
    warning(text = "Some text here", autoclose = false) {
      this.showPanel(text, "warning", autoclose);
    },
    showPanel(text, type, autoclose) {
      let btn = autoclose
        ? ""
        : '<button onclick="topPanel.closePanel()">&times;</button>';
      let h = `<div id="top_panel" class="panel_${type}">
            <p>${text}</p>${btn}</div>`;
      if (document.getElementById("top_panel") !== null) {
        this.closePanel();
      }
      document
        .getElementsByTagName("body")[0]
        .insertAdjacentHTML("afterbegin", h);
      if (autoclose) {
        const _this = this;
        setTimeout(function () {
          _this.closePanel();
        }, 3000);
      }
    },
    closePanel() {
      document.getElementById("top_panel").remove();
    },
  };