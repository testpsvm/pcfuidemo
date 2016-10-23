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

- Connect to cloud foundry using `cf login -a https://api.run.pivotal.io`

- Check that `staticfile_buildpack` is installed

- Select the space you want to deploy to

- `cf push -b staticfile_buildpack pcfuidemo`

Remark : You may have to add `-m 64M` on test environment if you don't have enough memory and `-k 256M` for disk space


Test the application [pcfuidemo](http://pcfuidemo.cfapps.io/)