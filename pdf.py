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

pdfkit.from_file(
    input="./site/index.html",
    output_path="./theme/assets/OzcanYarimdunya.pdf",
    options=options,
)
