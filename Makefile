help:
	@echo "help   : Show this help message"
	@echo "build  : Build mkdocs"
	@echo "install: Install dependencies"
	@echo "publish: Deploy to GitHub pages"

build:
	@mkdocs build

install:
	@pip install --upgrade pip
	@pip install -r requirements.txt

publish:
	@mkdocs gh-deploy --clean --force
