# Meteor Scaffolding

![scaffold](scaffold.jpg)

# This is the standard project architecture that I use for [Meteor](https://www.meteor.com/)

## I use a collection-centric model

## FS Layout

- `/globals`
  - `/client`
    - `/main.client.js` (import startup files)
    - `/main.html` (add viewport and other headers)
  - `/server`
    - `/main.server.js` (import startup files)
- `/imports`
  - `/collections`
    - `/dogs`
      - `/ui` (define collection ui components)
      - `/dogs.collection.js` (define hooks and schema)
      - `/dogs.security.js` (define pub/sub exposures)
    - `/users`
      - `/users.collection.js` (define hooks and schema)
  - `/security`
    - `/rules.js` (define top-level security)
  - `/startup`
    - `/startup.both.js` (init file for client/server)
  - `/ui` (define top-level ui components)
    - `/routes.js` (define routes)
