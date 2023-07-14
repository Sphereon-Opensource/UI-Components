<!--suppress HtmlDeprecatedAttribute -->
<h1 align="center">
  <br>
  <a href="https://www.sphereon.com"><img src="https://sphereon.com/content/themes/sphereon/assets/img/logo.svg" alt="Sphereon" width="400"></a>
  <br>UI Components
  <br>
</h1>

# Building and testing

## Lerna

The UI-Components makes use of Lerna for managing multiple packages. Lerna is a tool that optimizes the workflow around
managing multi-package repositories with git and pnpm.

## Build

The below command builds all packages for you using lerna

```shell
pnpm build
```

## Utility scripts

There are other utility scripts that help with development.

* `pnpm fix:prettier` - runs `prettier` to fix code style.

## Publish

There are scripts that can publish the following versions:

* `latest`
* `next`
* `unstable`

```shell
pnpm publish:[version]
```
