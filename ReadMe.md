Go binary app is always in static linking, then it can be called in a linux container (from any language) without any library dependencies. This repo is to show this fact. 

## Build go-producer binary

This go producer binary is called in the python app container and nodejs app container to pushlish some messages to the Rabbitmq topic. 

```
cd ./go-producer/ 
make clean; make; 
cd ..
```

## Run docker

`docker-compose up --build`
