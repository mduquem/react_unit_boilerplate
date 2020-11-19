import { shallow } from 'enzyme'
import Tester from '../pages/tester'


describe('<Tester />', () => {
    it('should appear on screen <Tester />', () => {
        const wrapper = shallow(<Tester />)
        expect(wrapper.exists())
    })
})

describe('<Tester />', () => {
    it('should render a title with Tester', () => {
        const wrapper = shallow(<Tester />)
        expect(wrapper.find('h1').text().toBe('Tester')).toHaveLength(1)
    })
})
