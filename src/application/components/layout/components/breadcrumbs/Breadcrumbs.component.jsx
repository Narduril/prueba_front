import { useLocation, Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { appRoutes } from '../../../../configuration/routes/app-routes/appRoutes';
import { Breadcrumbs, Typography } from '@mui/material';
import { WrapperContainer } from './Breadcrumbs.styled';

const NextBreadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(appRoutes);
  const { pathname } = useLocation();

  return (
    <WrapperContainer>
      <Breadcrumbs separator="/" aria-label="breadcrumb">
        {breadcrumbs.map(({ match, breadcrumb, index }) => {
          const isMatched = pathname === match.pathname;

          return !isMatched ? (
            <Link key={`${breadcrumb}-${index}`} to={match.pathname}>
              {breadcrumb}
            </Link>
          ) : (
            <Typography fontWeight={'bold'} key={`${breadcrumb}-${index}`}>
              {breadcrumb}
            </Typography>
          );
        })}
        ;
      </Breadcrumbs>
    </WrapperContainer>
  );
};

export default NextBreadcrumbs;
