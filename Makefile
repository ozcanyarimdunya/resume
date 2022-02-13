help:
	@echo "help   : Show this help message"
	@echo "build  : Build mkdocs"
	@echo "install: Install dependencies"
	@echo "serve  : Run project locally"
	@echo "publish: Deploy to GitHub pages"

build:
	@mkdocs build

install:
	@pip install --upgrade pip
	@pip install -r requirements.txt

serve:
	@mkdocs serve

pdf:
	@python pdf.py

publish:
	@mkdocs gh-deploy --clean --force
