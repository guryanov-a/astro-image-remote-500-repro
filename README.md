# Astro dev `/_image`: bare 500 and no log line for a remote source that cannot be fetched

Astro 7.4.13, sharp 0.35.5.

```sh
npm install
npm run dev
# in another terminal:
curl -s -D - -o /dev/null 'http://localhost:43871/_image?href=https%3A%2F%2Fraw.githubusercontent.com%2Fwithastro%2Fastro%2Fmain%2Fdoes-not-exist.png&w=420&h=236&q=90&f=webp'
```

Result: `HTTP/1.1 500 Internal Server Error`, body `Internal Server Error`. The dev log shows only `[500] /_image <ms>`, with no source URL, status or error.

Expected: the failed source fetch is logged, and the status reflects the source failure (for example 404).
