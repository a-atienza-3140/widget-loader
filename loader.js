(() => {
    const script = document.currentScript;

    const createWidget = () => {
        const widget = document.createElement("div");
        const widgetStyle = widget.style;

        // Default styles for the widget
        widgetStyle.display = "none";
        widgetStyle.boxSizing = "border-box";

        // position based on `data-position` attribute
        const position = script.getAttribute("data-position");
        if (position === "sticky") {
            widgetStyle.width = "360px";
            widgetStyle.height = "60px";
            widgetStyle.position = "fixed";
            widgetStyle.bottom = "20px";
            widgetStyle.right = "20px";
        } else {
            // Default to top iframe
            widgetStyle.width = "100%";
            widgetStyle.height = "32px";
            widgetStyle.position = "absolute";
            widgetStyle.top = "0px";
            widgetStyle.right = "0px";
        }

        return widget;
    };

    const createIframe = () => {
        const iframe = document.createElement("iframe");
        const iframeStyle = iframe.style;

        // Styles for the iframe
        iframeStyle.boxSizing = "border-box";
        iframeStyle.position = "absolute";
        iframeStyle.top = 0;
        iframeStyle.width = "100%";
        iframeStyle.height = "100%";
        iframeStyle.border = "none";
        iframeStyle.margin = 0;
        iframeStyle.padding = 0;

        return iframe;
    };

    const loadWidget = () => {
        const widget = createWidget();
        const iframe = createIframe();

        widget.appendChild(iframe);

        // Get attributes
        const brandName = script.getAttribute("data-brand");

        iframe.addEventListener("load", () => {
            widget.style.display = "block";
        });

        // TODO: Change when widget content is ready
        iframe.src = `https://a-atienza-3140.github.io/widget-content?brand=${encodeURIComponent(brandName || '')}`;

        document.body.appendChild(widget);
    };

    // Load only after document is fully loaded
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
