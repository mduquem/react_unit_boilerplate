const Adapter = require('enzyme-adapter-react-16')
const { configure } = require('enzyme')

require('enzyme').configure({ adapter: new Adapter() })