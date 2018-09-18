import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import DataChart from '../components/dataChart';

configure({ adapter: new Adapter() });

describe('<DataChart />', () => {
    it('renders an Chart Element', () => {
        const dataChart = shallow(<DataChart />);
        expect(dataChart.find(canvas)).to.have.lengthOf(1);
    })

})