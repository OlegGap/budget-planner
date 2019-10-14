import { connect } from 'react-redux';
import * as plannerActions from '../../redux/plannerActions';
import BudgetForm from './BudgetForm.jsx';

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(plannerActions.addBudget(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);