---
pcx-content-type: configuration
---

# Fetch

The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) provides an interface for asynchronously fetching resources via HTTP requests inside of a Worker.

The `fetch` method is implemented on the `ServiceWorkerGlobalScope`. Refer to [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) for more information.

<Aside type="note">

Asynchronous tasks such as `fetch` are not executed at the top level in a Worker script and must be executed within a FetchEvent handler such as [`respondWith`](/runtime-apis/fetch-event#methods). Learn more about [the Request context](/runtime-apis/request#the-request-context).

</Aside>

<Aside type="warning" header="Warning">

It is not currently possible to send fetch requests to other Workers (Worker to Worker) within the same zone. The origin server, if any, will receive the request instead. However, sending requests to Workers within other zones is possible and will work as normal. 

</Aside>

--------------------------------

## Constructor
<!-- This code example needs more work -->
```js
---
highlight: [8]
---
addEventListener("fetch", event => {
  // NOTE: can’t use fetch here, as we’re not in an async scope yet
  event.respondWith(eventHandler(event))
})

async function eventHandler(event) {
  // fetch can be awaited here since `event.respondWith()` waits for the Promise it receives to settle
  const resp = await fetch(event.request)
  return resp
}
```

<!-- Where do we have the return type in this format? -->
<Definitions>

- <Code>fetch()</Code> <TypeLink href="/runtime-apis/response">Promise{`<Response>`}</TypeLink>

  - Fetch returns a promise to a Response.

</Definitions>

--------------------------------

## Properties

<Definitions>

- `request` <TypeLink href="/runtime-apis/request">Request</TypeLink> | <Type>string</Type>
  - The [`Request`](/runtime-apis/request) object or a string represents the URL to fetch.

- `init` <TypeLink href="/runtime-apis/request#requestinit">RequestInit</TypeLink>
  - The content of the request.

</Definitions>

--------------------------------

## Related resources

- [Example: use `fetch` to respond with another site](/examples/respond-with-another-site)
- [Example: Fetch HTML](/examples/fetch-html)
- [Example: Fetch JSON](/examples/fetch-json)
- [Example: cache using Fetch](/examples/cache-using-fetch)
