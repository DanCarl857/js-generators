FS-dev Generator
========================================

A full stack application which creates pseudo generator functions based on *sequencer* functions that have been implemented [here](https://github.com/DanCarl857/FS-dev-generator/blob/master/server/generators.js). 

The _back end_ is done in:
* [NodeJS] and [Express]. 
* For testing, [Mocha] and the Node Assertion Library where used.

The _front end_ is done in:
* [React]
* [Redux] along with;
* [Redux-Thunk]: allow for returning action creators instead of just plain actions
* [Redux-Logger](https://github.com/LogRocket/redux-logger): Logger for redux.
* [Redux-Dev-Extension-Tools](https://github.com/zalmoxisus/redux-devtools-extension): For debugging purposes
* [Jest] and [Enzyme] are used for testing

## Design

For this project, I decided to go by way of developing a REST backend which provides data to the frontend client. I went with this particular
method of design due to the following:

* Scalability: Due to the separation of the backend(server) and frontend(client), the product can easily be scaled by any other developer
* Portability: Again due to the separation of concerns, the server and client can be hosted on different servers.
* Also, this particular design allowed for me to focus on one thing at every point in time and I can easily extract the generators/sequencers and use in other projects.

## Assumptions/Corners
* I assumed the correct data will always be sent to the sequencers and as such didn't focus too much on error handling in fail cases
* I also assumed limits when it came to the prime number sequencer(10000 prime numbers).

* As for corners, I implemented the frontend before writing the unit tests.
* I also hardcoded the start and step values for my range number sequencer, I did same for the partial sum sequencer. This is because taking these as parameters caused my sequencer to only return the first number and I was taking too long to debug the issue.

## Development

```
docker-compose up
```

For development, the `server/` and `client/` directories have their own docker containers, which are configured via the `docker-compose.yml` file.

The client server is spun up at `localhost:3000`

The local directories are mounted into the containers, so changes will reflect immediately. However, changes to package.json will likely need to a rebuild: `docker-compose down && docker-compose build && docker-compose up`.

### Notes

#### Installing npm dependencies

All changes to `node_modules` should happen *inside* the containers. Install any new dependencies inside the container. You can do this via `docker-compose run`, but it’s easier to just update a running container and avoid having to rebuild everything:

```
docker-compose exec client
```

Then inside:

```
npm install --save <new_dependency>
```
