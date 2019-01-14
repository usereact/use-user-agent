# React hook that returns User-Agent information

It uses [UAParser.js](https://github.com/faisalman/ua-parser-js) under the hood to parse the User-Agent string.

## Usage

**`useUserAgent` requires you to depend on React 16.7.0-alpha.0 or later. For more information on React Hooks, check out [official documentation](https://reactjs.org/docs/hooks-intro.html).**

Wrap your Component with the UserAgentProvider and pass the User-Agent string:

```js
import { UserAgentProvider } from "use-user-agent";

function App() {
  return (
    <UserAgentProvider userAgent={window.navigator.userAgent}>
      <Component />>
    </UserAgentProvider>
  );
}
```

Retrieve the information parsed from [UAParser.js](https://github.com/faisalman/ua-parser-js):

```js

import useUserAgent from 'use-user-agent'

function Component() {
  const { os, browser, device, cpu, engine } = useUserAgent()
  ...
}
```
