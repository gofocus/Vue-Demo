

import _ from 'lodash'
import $ from 'jquery'
import "./css/index.css";
import './css/index.less';
import './css/index.scss';
// import 'bootstrap/dist/css/bootstrap.css'

$(function () {
    $('li:odd').css('backgroundColor', 'green');
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97364';
    });

    document.body.appendChild(component());

});

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

