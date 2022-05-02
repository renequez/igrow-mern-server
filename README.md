# Local
## Prerequisites
- Have [Docker](https://docs.docker.com/get-docker/) installed on your system.
## To run
Open a terminal in your projects folder and run the following commands:
```bash
git clone https://github.com/renequez/igrow-mern-server
cd igrow-mern-server
docker-compose up -d
```
For development you have to also run `npm i`.
## Check
To see if everything is working correctly, go in your browser and visit `http://localhost:5000/home`. You should see the following:
```json
{
    "message": "home!"
}
```