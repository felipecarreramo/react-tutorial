import http from 'http';
import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import Pages from './pages/containers/Pages.jsx';
import Layout from './pages/components/Layout.jsx';

function requestHandler(req, res) {

  const context = {};
  const html = renderToString (
    <StaticRouter
      location={req.url}
      context={context} >
      <Pages />
    </StaticRouter>
  );

  res.setHeader('Content-Type', 'text/html');

  if ( context.url ) {
    res.writeHead(301, {
      Location: context.url,
    });

    res.end();
  }

  res.write(
    renderToStaticMarkup(
      <Layout
        title = "Aplicación"
        content = { html }
      />
    )
  );
  res.end();
}

const server = http.createServer(requestHandler);
server.listen(3000);
