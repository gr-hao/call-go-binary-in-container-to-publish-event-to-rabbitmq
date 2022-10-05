all:
	GOOS=darwin GOARCH=amd64 CGO_ENABLED=0 go build -o go-producer.darwin-amd64 .
	GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o go-producer .
	cp -f go-producer ../py-app/
	cp -f go-producer ../nodejs-app/
clean:
	rm -f go-producer.darwin-amd64 go-producer