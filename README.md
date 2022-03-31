# TypeScript, React, Rollup, and Chrome v3 Manifest Starter

This is a bare bones starter for building React/Typescript extensions for Chrome using `manifest_version: 3`.

Under the hood, this starter leans pretty heavily on the infrastructure from [Extend Chrome](https://www.extend-chrome.dev/rollup-plugin). The primary difference is this starter integrates some foundational code and manifest configuration for v3 which I couldn't find in the boilerplate examples they offer.

## Notes

In my tinkering with this starter there are a few notes that I find helpful.

### 1. Manually bundle files

If you reference files that can't be automatically recognized, use the `web_accessible_resources` property in manifest to explicitly bundle them.

```json
"web_accessible_resources": [
    {
      "resources": [
        "pages/popup/index.html",
        "pages/popup/App.tsx",
        "pages/popup/index.tsx"
      ],
      "matches": [
        "<all_urls>"
      ]
    }
  ]
```


## Development

For development with automatic reloading:

```sh
yarn start
```

Open the [Extensions Dashboard](chrome://extensions), enable "Developer mode",
click "Load unpacked", and choose the `dist` folder.

When you make changes in `src` the background script and any content script will
reload automatically.

## Production

When it's time to publish your Chrome extension, make a production build to
submit to the Chrome Web Store. This boilerplate will use the version in
`package.json`, unless you add a version to `src/manifest.json`.

> Make sure you have updated the name and version of your extension in
> `package.json`.

Run the following line:

```sh
yarn build
```

This will create a ZIP file with your package name and version in the `releases`
folder.
