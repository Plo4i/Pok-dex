# Pokedex React App

This is a Pokédex application built with React. The application uses the PokeAPI to fetch data about the Pokemons (e.g. Stats, Abilities, etc.), and also the Pokemons themselves. By clicking on a Pokemon card you will get the stats for the specific Pokemon. With the buttons, 'Previous' and 'Next' you can switch between different pages to see other Pokemons. Enjoy!
Link: [https://plo4i.github.io/Pokedex/](https://plo4i.github.io/Pokedex/)

## You can run it in Docker container!!!
![image](https://github.com/Plo4i/Pokedex/assets/56607740/9fbc7fb4-68b5-44db-a7fc-e336f3cd73db)

### Step 1: Open a Terminal or Command Prompt
First, you need to open a terminal (on Linux or macOS) or command prompt (on Windows). This is where you'll enter all the Docker commands.
If you don't have docker installed you should install it based on your Operating System.
You can follow these tutorials on how to install it for your Operating System: 
[https://docs.docker.com/desktop/install/windows-install/](https://docs.docker.com/desktop/install/windows-install/).

### Step 2: Pull the Docker Image
Before you can run the app, you need to pull the Docker image from Docker Hub. Use the following command:

    docker pull dockerdimid/pokedex-dimitar-terziev

### Step 3: Run the Docker Container
Now that you have the image, you can run it as a container. Use the following command to start the app:

    docker run -d -p 2102:2102 --name Pokedex-App dockerdimid/pokedex-dimitar-terziev

### Step 4: Verify the Container is Running (optional)
To ensure that your container is running correctly, you can list all running containers with the following command:

    docker ps

### Step 5: Access the App
Now that your app is running, you can access it by opening a web browser and navigating to [http://localhost:2102](http://localhost:2102).

### Step 6: Stopping the Container
When you're done using the app, you can stop the container with the following command:

    docker stop Pokedex-App
