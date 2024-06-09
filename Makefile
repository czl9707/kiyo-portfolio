all: build

.PHONY: publish
publish: build
	aws s3 sync ./build/ s3://kiyo-portfolio --delete


.PHONY: build
build:
	npm run build