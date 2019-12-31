import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';
import { exportAllDeclaration } from '../node_modules/@babel/types';

describe('Card', () => {
    //smoke test: make sure the component renders

    it('renders without crashing', () => {
        //create a DOM element to render the component into
        const div = document.createElement('div');
        //Render the component; if something is wrong, it will fail here
        ReactDOM.render(<Card title="test 1" content="test 1 content" />, div);
        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
    //snapshot test: make sure that if we make a change, the same
    //...UI renders
    it('renders the UI as expected', () => {
        // render the component as JSON
        const tree = renderer.create(<Card />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot();
    });
})