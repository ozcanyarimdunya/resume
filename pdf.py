import re

import pdfkit

options = {
    "orientation": "Landscape",
    "margin-left": "0.4in",
    "margin-right": "0.4in",
    "margin-bottom": "0.4in",
    "margin-top": "0.4in",
    "page-height": "8.27in",
    "page-width": "11.7in",
    "page-size": "Letter",
}

with open("./site/index.html", mode="r", encoding="utf-8") as fp:
    content = re.sub("btn-container", "hidden", fp.read())

pdfkit.from_string(
    input=content,
    output_path="./theme/assets/ozcanyarimdunya.pdf",
    options=options,
)
