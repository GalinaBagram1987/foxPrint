# Makefile

.PHONY:
	develop install build run publish test lint lean #PHONY instal is a fact. not a name
develop:
	npx vite serve --mode development # Запускает сервер разработки
install:
	npm ci # installing dependencies based on package.json
build:
	NODE_ENV=production vite
run:
	npm start
publish:
	npm publish --dry-run
test:
	npm test
lint:
	npx eslint .
lean:
	rm -rf dist # Очищает директорию сборки (настроить под ваши нужды)