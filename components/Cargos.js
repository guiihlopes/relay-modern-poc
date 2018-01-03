import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import CargosPreview from './CargosPreview'
import { BootstrapTable, TableHeaderColumn, InsertButton } from 'react-bootstrap-table'

const selectRowProp = {
    mode: 'checkbox'
};

const Cargos = class extends React.Component {
    constructor(props) {
        super(props);
        this.handleInsertButtonClick = this.handleInsertButtonClick.bind(this);
        this.createCustomInsertButton = this.createCustomInsertButton.bind(this);
    }
    handleInsertButtonClick(onClick) {
        // Custom your onClick event here,
        // it's not necessary to implement this function if you have no any process before onClick
        console.log('Add');
        onClick();
    }

    createCustomInsertButton(onClick) {
        return (
            <InsertButton
                btnText='New'
                btnContextual='btn-primary'
                btnGlyphicon='glyphicon-plus'
                onClick={() => this.handleInsertButtonClick(onClick)} />
        );
    }
    render() {
        const options = {
            clearSearch: true,
            insertBtn: this.createCustomInsertButton
        }
        const { viewer } = this.props;
        return (
            <div>
                <h1>Cargos</h1>
                <BootstrapTable
                    data={viewer}
                    insertRow
                    deleteRow
                    selectRow={selectRowProp}
                    options={options}
                    search
                    multiColumnSearch
                >
                    <TableHeaderColumn dataField='id' hiddenOnInsert autoValue isKey>Cargo ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='titulo'>Titulo</TableHeaderColumn>
                    <TableHeaderColumn dataField='descricao'>Descrição</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default Cargos;
