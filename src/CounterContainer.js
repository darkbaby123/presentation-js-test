import { connect } from 'react-redux'
import { increment, decrement } from './actions'
import Counter from './Counter'

export default connect(state => state, { increment, decrement })(Counter)
