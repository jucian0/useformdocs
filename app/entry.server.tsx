// app/entry.server.tsx
import ReactDOMServer from "react-dom/server";
import type { EntryContext } from "remix";
import { RemixServer } from "remix";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { StylesContext } from "./styles.context";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {

  const sheet = new ServerStyleSheet();

  renderToString(
    sheet.collectStyles(
      <StylesContext.Provider value={null}>
        <RemixServer
          context={remixContext}
          url={request.url}
        />
      </StylesContext.Provider>
    )
  );

  const styles = sheet.getStyleElement();
  sheet.seal();

  const markup = ReactDOMServer.renderToString(
    <StylesContext.Provider value={styles}>
      <RemixServer
        context={remixContext}
        url={request.url}
      />
    </StylesContext.Provider>
  );

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}