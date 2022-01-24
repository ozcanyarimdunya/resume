import re
from datetime import datetime

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

file = "./site/index.html"
with open(file, "r", encoding="utf-8") as fp:
    content = fp.read()
    replace = "| {}".format(datetime.now().strftime("%c"))
    content = re.sub(r"\|\s+.*Download as PDF</a>", replace, content)

pdfkit.from_string(
    input=content,
    output_path="./theme/assets/ozcanyarimdunya.pdf",
    options=options,
)
