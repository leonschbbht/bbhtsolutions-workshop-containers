# Exercise 2: Running a Container from the Docker Image

## Introduction
In this exercise, you will run a Docker container using the image you built in Exercise 1. You will use essential Docker commands to create, manage, and monitor the container.

## Part 1: Running a Container
1. Open your terminal.

2. Run the following command to create and run a Docker container from the image you built in Exercise 1. Replace `[image_name]` with the actual name of your Docker image.

   ```bash
   docker run [image_name]
   ```

   This command runs the container using default settings.

   By default, Docker redirects the stdout (standard output) of the container to your shell environment. You should now see a new timestamp roughly every second.

   > Double-check the hostname that is printed in the logs. If you run the `node.js` application locally (without a container), it should print a different hostname. This proves that the container is an isolated environment!

3. Observe the container in the list of running containers by using the following command:

   ```bash
   docker ps
   ```

   Because Docker prints the output of the container to your terminal, you may need to open a second window to view the list of running containers.

## Part 2: Stopping the Container
1. To stop the running container, use the following command:

   ```bash
   docker stop [container_id]
   ```

   Replace `[container_id]` with the actual container ID or the first few characters of the ID displayed in `docker ps`.

2. After stopping the container, verify that it is no longer running by using the `docker ps` command.

3. You can also restart an existing container using:

   ```bash
   docker start [container_id]
   ```

   > Notice that now the logs are not written to your console anymore. You can still see the logs using the `docker logs [container_id]` command.

## Part 3: Removing the Container
1. Retrieve the container ID of the stopped container using the following command:

   ```bash
   docker ps -a
   ```

   This will display all containers, including the stopped ones, along with their IDs.

2. To remove a stopped container, use the following command:

   ```bash
   docker rm [container_id]
   ```

   Replace `[container_id]` with the actual container ID obtained in the previous step.

3. After removing the container, verify that it is no longer listed using the `docker ps -a` command.

## Conclusion
You have learned how to create, stop, restart, and remove a Docker container using `docker run`, `docker stop`, `docker start`, and `docker rm`. You also observed the importance of first retrieving the container ID using `docker ps -a` before removing the container. This exercise demonstrated the basic container management tasks necessary for working with Docker containers.

## Part 4: Using Flags to Manage Your Containers
If you have a container that you regularly have to start, stop, and remove, you can use some handy CLI flags to simplify the handling of the container.

1. Using the container ID can be a bit cumbersome because you always have to retrieve the ID using `docker ps` before performing any operations. An easier option is to use a name for the container instance:

   ```bash
   docker run --name [container-name] [image-id]
   ```

   This assigns a name of your choice to your container, allowing you to perform operations like start, stop, and rm with this name.

2. Attaching the logs of the container to your console might not always be desired. You can run the container in the background using the `-d` (detached) flag:

   ```bash
   docker run -d --name [container-name] [image-id]
   ```

3. To see the logs again, you can use:

   ```bash
   docker logs [container-name]
   ```

4. Automatically removing the container if it stops:

   If you want the container to be automatically removed after it stops or crashes, you can use the `--rm` flag:

   ```bash
   docker run -d --rm --name [container-name] [image_id]
   ```

   If you run:

   ```bash
   docker stop [container-name]
   ```

   You will see that it gets removed automatically using:

   ```bash
   docker ps -a
   ```