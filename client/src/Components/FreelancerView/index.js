import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const products = ["","",""];
const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];
export default () => (
    <div>
        I'm the FreelancerView
        Liste des offre de job a proximité :
        <BootstrapTable keyField='id' data={ products } columns={ columns } />
    </div>
)
