# Introduction
Next, you are going to containerize a simple node application that listens on a port and sends a request to a client.

## Part 1:
To prepare the node application you have to install it's dependencies. The dependencies are required to run the application. you can use
```npm install````
to install all dependencies.
Make sure you are in the same directory as the `package.json` file when you execute the command.

Now you should be able to run the application using
```node index.js```

You should now be receiving an error code `PORT is not defined as an environment variable`

## Part 2:

To properly run the application you have to set an environment variable `PORT`.
Whith unix-like operating systems this can be done using `export PORT=[VALUE]`.

Try setting the environment variable and run the application again `:)`

## Part 3: Building the image
Next you can use your knowledge from the previous exercises to containerize the application.

Choose which ever model of containerization you would like.

## Part 4: Run the container
In the last step you can run the container from the image you've build in `Part 4`. Remember that you need to set the environment variable `PORT`

You can do that via the command line argument `-e` for environment:

## Part 5: Publish ports
The application you are deploying requires network access which is isolated by default. To allow communcation to the outside world you can use the `-p` flag in the docker-run command:

`docker run -p [HOST_PORT]:[CONTAINER_PORT] -e [OPTIONS] [IMAGE_NAME]`

Afterwards you should be able to access the container on `http://localhost:[PORT]`