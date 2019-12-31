import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';

describe('List', () => {
    //smoke test: make sure the component renders

    it('renders without crashing', () => {
        const cards = [{
            id: 1, title: 'test title', content: 'test content'
        }, {
            id: 2, title: 'test title 2', content: 'test content 2'
        }]
        //create a DOM element to render the component into
        const div = document.createElement('div');
        //Render the component; if something is wrong, it will fail here
        ReactDOM.render(<List header="test header" cards={cards} />, div);
        // Clean up
        ReactDOM.unmountComponentAtNode(div);
    });
    //snapshot test: make sure that if we make a change, the same
    //...UI renders
    it('renders the UI as expected', () => {
        // render the component as JSON
        const tree = renderer.create(<List />).toJSON();
        // Check whether it matches the previous snapshot
        // Stored in __snapshots__/App.test.js.snap
        expect(tree).toMatchSnapshot();
    });
})