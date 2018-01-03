import React, { Component } from 'react'
import { graphql } from 'react-relay'
import withData from '../lib/withData'
import Cargos from '../components/Cargos'

class Index extends Component {
  static displayName = `Index`

  render(props) {
    return (
      <div>
        <Cargos viewer={this.props.listarCargos} />
      </div>
    )
  }
}

export default withData(Index, {
  query: graphql`
        query pages_indexQuery {
            listarCargos {
          titulo,
            descricao,
            id,
          }
        }
    `
})
