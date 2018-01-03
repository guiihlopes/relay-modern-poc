import Document, { Head, Main, NextScript } from 'next/document';

export default class IntlDocument extends Document {
  render() {
    return (
      <html lang={this.props.locale}>
        <Head>
          <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" />
          <link rel="stylesheet" href="./dist/react-bootstrap-table.min.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
