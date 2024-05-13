upstream vproapp {
  server app01:8080
}

// nginx is target instance of the appication loadbalancer
// The nginx routes the http://vproapp port 80 traffic to port 8080 app01 tomcat sapplicaiton server
// Once the traffic reaches the app01 server the app01 server uses application.js (application.properties)
// to route the traffic to backend servers via their hostnames (d01, mc01, rmq01)
// provision-stack/group_vars/dbsrvgrp has the db credentials for the database.

server {
  listen 80;
location / {
  proxy_pass http://vproapp;
}
}