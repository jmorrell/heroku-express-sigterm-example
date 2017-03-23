# Example of shutting down an Express server on SIGTERM

This server traces all of the requests received and the process of shutting down the server.

## Sending test traffic

You can send test traffic to the dyno using the Apache Bench `ab` command line tool

```
ab -c 20 -t 300 https://{app-name}.herokuapp.com/
```

## Deploying

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Or, from the command line:

```
$ heroku create
$ git push heroku master
$ heroku open
```

# Developing locally

```
$ yarn
$ yarn dev
```

