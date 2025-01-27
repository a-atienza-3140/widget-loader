(() => {
  const script = document.currentScript;

  const createWidget = () => {
    const widget = document.createElement("div");
    const widgetStyle = widget.style;

    widgetStyle.position = "sticky";
    widgetStyle.top = "0";
    widgetStyle.zIndex = "9999";

    widgetStyle.width = "100%";
    widgetStyle.height = "60px";
    widgetStyle.backgroundColor = "#f0f0f0";
    widgetStyle.display = "none";
    widgetStyle.boxSizing = "border-box";
    widgetStyle.cursor = "pointer";

    return widget;
  };

  const createIframe = () => {
    const iframe = document.createElement("iframe");
    const iframeStyle = iframe.style;

    iframeStyle.boxSizing = "border-box";
    iframeStyle.position = "fixed";
    iframeStyle.top = 0;
    iframeStyle.left = 0;
    iframeStyle.width = "100vw";
    iframeStyle.height = "100vh";
    iframeStyle.border = "none";
    iframeStyle.margin = 0;
    iframeStyle.padding = 0;
    iframeStyle.zIndex = "10000";
    iframeStyle.display = "none";

    return iframe;
  };

  const loadWidget = () => {
    const widget = createWidget();
    const iframe = createIframe();

    const brandName = script.getAttribute("data-brand") || "";

    iframe.addEventListener("load", () => {
      widget.style.display = "block";
    });

    widget.addEventListener("click", () => {
      iframe.style.display = "block";
    });

    iframe.src = `https://a-atienza-3140.github.io/widget-content?brand=${encodeURIComponent(brandName)}`;

    document.body.insertBefore(widget, document.body.firstChild);
    widget.appendChild(iframe);
  };

  if (document.readyState === "complete") {
    loadWidget();
  } else {
    document.addEventListener("readystatechange", () => {
      if (document.readyState === "complete") {
        loadWidget();
      }
    });
  }
})();
