import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './App';
import Form from './components/form';
import Tabbed from './components/tabbed';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    let app;
    beforeEach(() => {
        app = shallow(<App />);
    })

    it('renders an Form Component', () => {
        expect(app.find(Form)).to.have.lengthOf(1);
    })

    it('renders an Data Component', () => {
        expect(app.find(Tabbed)).to.have.lengthOf(1);
    })
})