import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

configure({ adapter: new Adapter() })

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
    expect(app).toHaveClassName('App')
  })
  it('contains a title', () => {
      expect(app.find('h1.title')).toHaveText('0hh1')
    })
  })
