import React, { useEffect } from 'react';
import FilterLink from '@/components/containers/FilterLink';
import { VisibilityFilters } from '@/stores/redux/action';
import { Dispatch } from 'redux';
import { setVisibilityFilter } from '@/stores/redux/action';
import { connect } from 'react-redux';
import { /*useHistory, useLocation, */useParams/*, useRouteMatch*/ } from 'react-router-dom';

interface IProps {
    dispatch: Dispatch,
};

const Footer: React.FC<IProps> = (props: IProps) => {
    console.log('component props:', props);

    let params: {
        visibilityFilter: string
    } = useParams();

    const { dispatch } = props;
    const { visibilityFilter } = params;

    useEffect(() => {
        dispatch(setVisibilityFilter(visibilityFilter));
    }, [dispatch, visibilityFilter]);

    return (
        <div>
            <span>Show：</span>
            <FilterLink filter={ VisibilityFilters.SHOW_ALL }>All</FilterLink>
            <FilterLink filter={ VisibilityFilters.SHOW_ACTIVE }>Active</FilterLink>
            <FilterLink filter={ VisibilityFilters.SHOW_COMPLETED }>Completed</FilterLink>
        </div>
    );
};

export default connect()(Footer)
