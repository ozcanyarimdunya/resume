help:
	@echo "help   : Show this help message"
	@echo "build  : Build mkdocs"
	@echo "install: Install dependencies"
	@echo "serve  : Run project locally"
	@echo "resume : Create resume in pdf format"
	@echo "publish: Deploy to GitHub pages"

build:
	@poetry run mkdocs build

install:
	@pip install poetry
	@poetry install

serve:
	@poetry run mkdocs serve

resume:
	@poetry run python resume.py

publish:
	@poetry run mkdocs gh-deploy --clean --force
