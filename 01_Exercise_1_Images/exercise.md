Here's the optimized markdown document with improved formatting, clarity, and organization for entry-level students:

# Exercise 1: Building a Docker Image

## Introduction
In this exercise, you will create your first container image. The resulting image can be used in `Exercise 2 - Containers`. The application you'll deploy is a simple `node.js` application, which is located in the `/app` folder within this directory. If you have Node.js installed on your device, you can run it locally by executing `node index.js`. Ensure you run this command in the correct directory using `cd [dirname]`, for example, `cd ./app`.

An explanation of what the Node.js app does can be found as a comment within the application itself.

## Part 1: Creating the Dockerfile
1. Start by creating a new empty file called `Dockerfile` in the same directory as the application you want to deploy.

2. Next, select an appropriate **base image** that suits your needs. Since you're deploying a Node.js application, you can check for a suitable Node.js image on the official [Docker image registry](https://hub.docker.com). You can either select a fixed version for your image or use the `latest` tag.

   To use this image in your Docker build process, include it in the `FROM` statement of your Dockerfile:

   ```Dockerfile
   FROM [YOUR IMAGE NAME]
   ```

3. Afterward, copy your application inside the image using the `ADD` statement:

   ```Dockerfile
   ADD [PATH_TO_FILE] [TARGET_PATH]
   ```

   This command copies your file to the specified target directory in the image. Make sure the target directory is not the same as your local directory.

4. Finally, specify the process the Docker container should launch and attach to using the `ENTRYPOINT` statement in the Dockerfile. The `ENTRYPOINT` should always be specified last:

   ```Dockerfile
   ENTRYPOINT ["node", "[TARGET_PATH]/index.js"]
   ```

### Result
Your Dockerfile should now look something like this:

```Dockerfile
FROM [YOUR IMAGE NAME]
ADD [PATH_TO_FILE] [TARGET_PATH]
ENTRYPOINT ["node", "[TARGET_PATH]/index.js"]
```

## Part 2: Building the Image
1. Open your terminal in the directory that contains the Dockerfile and the `index.js` file.

2. Run the Docker build command with a reference to the current directory:

   ```bash
   docker build ./
   ```

3. Check if the image was properly built by using the following command:

   ```bash
   docker image ls
   ```

   You should see an image with:

   > REPOSITORY: none, TAG: none

## Part 3: Assigning a Tag to the Image
If you build multiple different images on your machine, it can be challenging to distinguish them with the information `REPOSITORY: none TAG: none`. Furthermore, Docker may overwrite existing images without tags, as it cannot distinguish between them.

Usually, a tag for an image consists of two parts: `[NAME]:[VERSION]`. Since this is the first version of your simple Node.js application, you can use a tag like `nodeapp:1.0.0`. Remember that Docker image tags should always be in lowercase.

You can tag your image during the build process with the following command:

```bash
docker build --tag [tagname] ./
```

For example, if you want to use the tag `nodeapp:1.0.0`, the command would be:

```bash
docker build --tag nodeapp:1.0.0 ./
```

Check if the REPOSITORY and TAG were properly assigned using:

```bash
docker image ls
```

## Expected Results
Congratulations! You have now created an image for your application. You have also learned how to tag your image for easy identification in your local environment.