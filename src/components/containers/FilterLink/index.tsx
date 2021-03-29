import { connect } from 'react-redux';
import { setVisibilityFilter } from '@/stores/redux/action';
import Link from '@/components/presentations/Link';
import { Dispatch } from 'redux';
import React from 'react';

interface IState {
};
interface IOwnProps {
    filter: string
};

const mapStateToProps = (state: IState, ownProps: IOwnProps): {} => ({
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: IOwnProps): {onClick: React.MouseEventHandler} => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
