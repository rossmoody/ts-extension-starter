# TypeScript, React, Rollup, and Chrome v3 Manifest Starter

This is a bare bones starter for building React/Typescript extensions for Chrome
using `manifest_version: 3`.

Under the hood, this starter leans pretty heavily on the infrastructure from
[Extend Chrome](https://www.extend-chrome.dev/rollup-plugin). The primary
difference is this starter integrates some foundational code and manifest
configuration for v3 which I couldn't find in the boilerplate examples they
offer.

## Notes

In my tinkering with this starter there are a few notes that I find helpful.

### 1. Manually bundle files

If you reference files that can't be automatically recognized, use the
`web_accessible_resources` property in manifest to explicitly bundle them.

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

### 2. Split v2 and v3 manifests

Though a little hacky, I have had some success generating v2 and v3 manifests
with a little customization to this starter. The approach can be
[seen on my extension Link Roamer](https://github.com/rossmoody/link-roamer/blob/main/rollup.config.js).

The premise is pretty simple: hook into a specific string value throughout your
app and programmatically fire v2 or v3 API methods depending on the build
environment.

In this way,
[functions can be conditionally](https://github.com/rossmoody/link-roamer/blob/main/src/scripts/Chrome.ts)
compiled.

```js
if ('isV3Manifest') {
  return (
    await chrome.scripting.executeScript({
      target: { tabId },
      func,
    })
  )[0].result
} else {
  return (
    await browser.tabs.executeScript(tabId, {
      code: `(${func})()`,
    })
  )[0]
}
```

## Development

For development with automatic reloading:

```sh
npm run start
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

---

## More apps by me

I like making things. [Check out what I'm up to lately](https://rossmoody.com).
