# pcfuidemo

## Angularjs

[Documentation](https://docs.angularjs.org/guide)

## How to start


#### Create a module

#### Create a controller

#### Create a factory

#### Create a directive

#### Create a config


## How to deploy to cloudfoundry

Prerequisite : you must have a pivotal account

- Go under the `pcfuidemo` root folder.

- Connect to cloud foundry using `cf login`

- Check that `staticfile_buildpack` is installed

- Select the space you want to deploy to

- `cd ..`

- `cf push -b staticfile_buildpack pcfuidemo`


Test the application [pcfuidemo](http://pcfuidemo.cfapps.io/pcfuidemo/)