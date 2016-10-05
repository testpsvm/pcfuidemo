# pcfuidemo

## Angularjs

[Documentation](https://docs.angularjs.org/guide)

## How to start

## How to deploy

Prerequisite : you must have a pivotal account

- Go under the `pcdfuidemo` root folder.

- Connect to cloud foundry using `cf login`

- Check that `staticfile_buildpack` is installed

- Select the space you want to deploy to

- `cf push -b staticfile_buildpack pcfuidemo`


Test the application [pcfuidemo](http://pcfuidemo.cfapps.io/pcfuidemo/)